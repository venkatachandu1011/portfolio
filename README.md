# Venkata Chandu Pitta: QA Portfolio

A one-page portfolio site, tested with Playwright (TypeScript).

Live site: https://venkatachandu1011.github.io/portfolio/

## What is tested
- Heading, page title and email link are correct
- Navigation scrolls to the right section
- Both projects are listed
- The terminal animation and stat counters finish
- Theme toggle works
- Mobile layout keeps the main button visible
- Runs on Chromium, Firefox and WebKit

## Run the tests
```bash
npm install
npx playwright install
npm test
npm run report
```

## Tech
HTML, CSS, JavaScript, Playwright, TypeScript, GitHub Actions
