# Guest Checkout Test Plan

This document describes manual test cases for the guest checkout flow on the Shopware 6 public demo storefront.

Positive Test Cases

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| P1 | Happy path guest checkout | Store is reachable; items available | 1. Open storefront
2. Open a product or category
3. Open first product
4. Add to cart
5. Open cart, proceed to checkout
6. Choose guest, fill valid data
7. Select Nachnahme / Cash on delivery if available
8. Confirm order | Order confirmation / thank you page shown with order number | High |
| P2 | Checkout after browsing category | Store reachable; categories populated | 1. Open storefront
2. Click a category
3. Open a product from listing
4. Add to cart, checkout as guest with valid data | Order confirmation shown, product matches selection | High |
| P3 | Update quantity before checkout | Product allows quantity changes | 1. Add product to cart
2. Open cart
3. Increase quantity to 2
4. Proceed to checkout as guest and complete | Cart reflects quantity change and totals update; order placed for 2 items | Medium |
| P4 | Continue shopping then checkout | Store reachable | 1. Add product to cart
2. Click "Continue shopping"
3. Add another product
4. Open cart and checkout as guest | Both items present in cart; checkout succeeds | Medium |
| P5 | Valid special characters in name/address | Store reachable | 1. Add product and checkout as guest
2. Use names/addresses with accents and special chars (e.g., "José Müller-López")
3. Complete checkout | Order accepted and characters displayed correctly on confirmation | Low |

Negative Test Cases

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| N1 | Missing required checkout fields | Cart has at least one item | 1. Proceed to checkout as guest
2. Leave required fields empty (e.g., last name, address)
3. Try to continue/confirm | Validation messages appear and prevent submission | High |
| N2 | Invalid email address | Cart has items | 1. Proceed to checkout as guest
2. Enter invalid email (e.g., "not-an-email")
3. Try to continue/confirm | Form shows email validation error and blocks progression | Medium |
| N3 | Attempt checkout with empty cart | Store reachable | 1. Open cart when empty
2. Click checkout (if available) | User prevented from checking out; appropriate message shown or checkout disabled | High |

Edge Cases

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| E1 | Very long first/last name | Product available | 1. Add product to cart
2. Proceed to checkout as guest
3. Enter very long names (e.g., > 256 characters) and submit | System trims or shows validation error; no crash | Low |
| E2 | Quantity 0 or very large quantity | Product allows quantity input | 1. Add product to cart
2. Edit cart quantity to 0, or very large number (e.g., 9999)
3. Proceed to checkout | Quantity 0 should be rejected/removed; very large numbers show stock or validation errors | Medium |
