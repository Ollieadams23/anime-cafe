# Checkout Page Plan (checkout.html)

## Page purpose
Display cart items with quantities, prices, and order summary. Allow users to review their selection before proceeding to order.

## Head and meta
- Title: Local Business Cafe | Checkout
- Description: Review your order and proceed to checkout.
- Include shared meta and links from site-wide guide.

## Required content blocks

1. Cart header
- Title: "Your Cart"
- Clear and prominent

2. Empty cart state
- Message: "Your cart is empty"
- Link back to products: "Continue Shopping"
- Show only when cart has 0 items

3. Cart items section
- Display each item in the cart
- For each item show:
  - Product image (thumbnail, clickable to enlarge)
  - Product name
  - Price per unit
  - Quantity (with +/- buttons or input)
  - Subtotal (price × quantity)
  - Remove button

4. Order summary section
- Subtotal (sum of all items)
- Tax (optional - could be 0 or calculated)
- Delivery fee (optional)
- **Total order price (bold, prominent)**

5. Action buttons
- [Continue Shopping] → back to products.html
- [Clear Cart] → removes all items (with confirmation)
- [Proceed to Order] → could go to payment page or show confirmation

6. Order notes (optional)
- Text field for special requests or delivery instructions

## Links on this page
- index.html
- products.html
- contact.html
- (Future: payment.html)

## JavaScript requirements
- Load cart from localStorage
- Fetch item details (name, price, image) from JSON files using item IDs
- Calculate quantities (count duplicate IDs)
- Calculate totals and subtotals
- Update quantities dynamically (+/- buttons)
- Remove items from cart
- Clear entire cart
- Persist changes to localStorage
- Handle empty cart state

## Data structure
```javascript
// Cart in localStorage
localStorage.cart = "[1, 3, 5, 1]"  // IDs only

// On checkout, fetch details:
// { id: 1, name: "Pancakes", price: "$5.99", image: "..." }
// Then aggregate quantities:
// { "1": 2, "3": 1, "5": 1 }
```

## Suggested interactions
- Click product image to enlarge (using existing toggleImageEnlarge)
- +/- buttons to adjust quantity
- Remove button per item
- Quantity updates recalculate totals in real-time
- Clear cart with confirmation modal
- Continue shopping returns to products page

## Styling notes
- Cart items in a clean list or card format
- Item cards should be consistent with products page
- Summary section visually separated (box, different background, etc.)
- Buttons with clear hover/focus states
- Responsive: single column on mobile, stacked on desktop
- Use brand colors (#06d157, black) consistently

## Wireframe (simple)
```
+------------------------------------------------------+
| Header: Logo | Home About Category Products Contact |
+------------------------------------------------------+
| Your Cart                                            |
+------------------------------------------------------+
| [Item 1] Qty: 2  Subtotal: $11.98                   |
| [Item 2] Qty: 1  Subtotal: $6.49                    |
| [Item 3] Qty: 1  Subtotal: $5.49                    |
+------------------------------------------------------+
| Subtotal: $23.96                                     |
| Tax: $2.40                                           |
| Total: $26.36                                        |
+------------------------------------------------------+
| [Continue Shopping] [Clear Cart] [Proceed to Order]  |
+------------------------------------------------------+
| Footer                                                |
+------------------------------------------------------+
```

## Build checklist
- [x] Cart loads from localStorage on page load
- [x] Empty cart message shows when cart is empty
- [x] All items display with image, name, price, quantity
- [x] Quantities correctly aggregated from cart IDs
- [x] +/- buttons update quantity and recalculate totals
- [ ] Remove button works and updates cart
- [x] Totals calculated correctly
- [ ] Continue Shopping link works
- [ ] Clear Cart button with confirmation
- [x] All links work (header navigation, back to products)
- [x] Images clickable to enlarge
- [x] Responsive on mobile and desktop
- [x] No console errors
- [x] localStorage updates when quantities change
- [x] passes wc3 validation
- [x] passes wc3 accessibility
- [x] passes wc3 jigsaw css


## Optional enhancements
- Add to cart from checkout (keep item, change quantity)
- Apply coupon/discount code
- Shipping address form
- Payment method selection
- Save cart for later
- Share cart link
