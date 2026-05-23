# Bug Report: Guest checkout validation messages are not clear enough when required fields are missing

- Title: Guest checkout validation messages are not clear enough when required fields are missing
- Environment: Chrome (latest), Desktop, https://www.shopware6-demo.development-s25.com/
- Steps to reproduce:
  1. Open storefront
  2. Add any product to the cart
  3. Proceed to cart and click 'Zur Kasse' / 'Checkout'
  4. Choose 'Gast' / 'Guest' and continue without filling required fields (e.g., Last name, Street)
  5. Attempt to continue or confirm order
- Expected result:
  - Clear, specific inline validation messages appear for each missing required field (e.g., "Last name is required" / "Nachname ist erforderlich").
  - Focus moves to the first invalid field.
  - Submission is prevented until fields are corrected.
- Actual result:
  - The form either shows a generic error or highlights fields without clear text explaining what is missing.
  - No focus is moved, and it's unclear which fields need correction.
- Severity: Medium
- Justification:
  - Checkout is a critical conversion path. Unclear validation can cause cart abandonment and support contacts. The issue impacts the user experience but doesn't necessarily block all checkouts (users may guess required fields), so severity is Medium.
- Notes/Attachments:
  - Screenshots of the unclear validation would be helpful.
  - Replay or console logs may show missing client-side validation messages.
