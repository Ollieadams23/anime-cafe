# To Fix

## Accessibility

### 1. Table headers using `<td>` instead of `<th>`
- **File:** `scripts/checkout.js`
- **Issue:** Header row uses `<td>` so screen readers cannot identify column headers
- **Fix:** Change to `<th scope="col">` for Item, Quantity, and Price headers

### 2. +/- buttons have no accessible label
- **File:** `scripts/checkout.js`
- **Issue:** Buttons only show `-` and `+` so screen readers announce "button" with no context
- **Fix:** Add `aria-label` e.g. `aria-label="Remove one Pancakes"` and `aria-label="Add one Pancakes"`

### 3. Quantity number has no label
- **File:** `scripts/checkout.js`
- **Issue:** Plain number between buttons has no context for screen readers
- **Fix:** Wrap in `<span aria-label="Quantity: 2">2</span>`

### 4. Table has no accessible label
- **File:** `scripts/checkout.js`
- **Issue:** Table has no `<caption>` or `aria-label` so screen readers don't announce what the table is
- **Fix:** Add `aria-label="Cart items"` to the `<table>` element

### 5. Empty `<td>` cells in totals and payment rows
- **File:** `scripts/checkout.js`
- **Issue:** Empty cells are confusing for screen readers navigating by cell
- **Fix:** Use `colspan="2"` on the label cell instead of having empty cells

### 6. No empty cart state
- **File:** `scripts/checkout.js`
- **Issue:** If cart is empty, nothing renders — no feedback for screen readers or sighted users
- **Fix:** After loading cart from localStorage, check if empty and display a message with a link back to products.html
- **Status:** Resolved (implemented)
