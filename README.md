# Shopware 6 Demo — Guest Checkout Playwright Tests

Purpose
-------

This repository contains an end-to-end Playwright + TypeScript test that verifies the primary guest checkout flow on the Shopware 6 public demo storefront.

Target
------

Public demo storefront: https://www.shopware6-demo.development-s25.com/

Quick setup
-----------

1. Install dependencies

   npm install

2. Install Playwright browsers

   npx playwright install

Run tests
---------

- Run the test suite (headless):

  npx playwright test

- Run tests headed (visible browser):

  npx playwright test --headed

- Open Playwright test runner UI:

  npx playwright test --ui

Notes
-----

- Tests are written in TypeScript using Playwright Test and the built-in `expect` assertions.
- The primary E2E spec is `tests/guest-checkout.spec.ts` and uses robust selectors and cookie handling to reach the checkout page.

What I would improve with more time
-----------------------------------

- Add more test coverage (search, filters, multi-item carts, returns).
- Extract page-objects / components for reuse and maintainability.
- Add CI integration with Playwright test reporting and screenshots on failure.
- Add retry/screenshot/video configuration tuned for the public demo environment.

## Current Automation Status

The automated Playwright test currently verifies the main storefront flow up to checkout:

- Opens the Shopware 6 demo storefront
- Accepts the cookie banner if visible
- Opens the Clothing category
- Selects the first visible product
- Adds it to the cart
- Opens the cart
- Proceeds to checkout
- Verifies that the checkout/account page is reached

The final order placement step is not automated. The public demo checkout form and payment selectors require additional stabilization with Playwright codegen before automating order placement.
