import { test, expect } from '@playwright/test';
import path from 'path';

const page_url = 'file://' + path.resolve(__dirname, '..', 'index.html');

test.beforeEach(async ({ page }) => {
  await page.goto(page_url);
});

test('shows name as the main heading', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Venkata Chandu Pitta');
});

test('page title mentions QA Engineer', async ({ page }) => {
  await expect(page).toHaveTitle(/QA Engineer/);
});

test('nav link scrolls to Projects section', async ({ page }) => {
  await page.getByRole('link', { name: 'Projects', exact: true }).first().click();
  await expect(page.locator('#projects')).toBeInViewport();
});

test('lists both projects', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'CollabConnect' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'E-Commerce Web Application' })).toBeVisible();
});

test('qa-profile.json card types out the profile', async ({ page }) => {
  await expect(page.locator('#json')).toContainText('"status"', { timeout: 10_000 });
  await expect(page.locator('#json')).toContainText('Playwright');
});


test('stats counters reach their final values', async ({ page }) => {
  await page.locator('.stats').scrollIntoViewIfNeeded();
  await expect(page.locator('.stat b').first()).toHaveText('40+', { timeout: 5_000 });
});

test('theme toggle sets a theme', async ({ page }) => {
  await page.getByRole('button', { name: /switch light and dark/i }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', /^(light|dark)$/);
});

test('resume and GitHub links are present', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'View resume' })).toHaveAttribute('href', 'resume.pdf');
  await expect(page.getByRole('link', { name: /GitHub/ }).first()).toHaveAttribute('href', 'https://github.com/venkatachandu1011');
});

test('email link is correct', async ({ page }) => {
  await expect(page.locator('a[href^="mailto:"]').first())
    .toHaveAttribute('href', 'mailto:venkata111chandu@gmail.com');
});

test('mobile layout keeps the call-to-action visible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await expect(page.getByRole('link', { name: 'Explore my work' })).toBeVisible();
});
