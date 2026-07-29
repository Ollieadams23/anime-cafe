# Developer Guide - Anime Cafe

This document explains how the Anime Cafe website operates and documents all JavaScript functions.

## Site Architecture

### Project Structure
```
localcafe/
├── index.html              # Home page
├── about.html              # About page
├── category.html           # Category/menu categories page
├── products.html           # Products page with cart
├── contact.html            # Contact page with form
├── assets/
│   ├── css/
│   │   └── style.css       # All styling (single file)
│   ├── images/
│   │   ├── header.jpeg
│   │   ├── breakfasts/     # Breakfast item images
│   │   ├── drinks/         # Drink item images
│   │   └── treats/         # Treat item images
│   └── menus/
│       ├── breakfasts.json # Breakfast menu data
│       ├── drinks.json     # Drinks menu data
│       └── treats.json     # Treats menu data
└── scripts/
    ├── index.js            # Shared header/footer loader
    └── products.js         # Cart & menu loader logic
```

### How Pages Load

1. **Every page loads `index.js` first** (via defer)
   - Injects shared header with navigation
   - Injects shared footer with contact info
   - Marks active nav link based on current page

2. **Products page also loads `products.js`** (via defer)
   - Loads menu items from JSON files
   - Handles add-to-cart functionality
   - Displays cart contents
   - Enables image enlargement on click

3. **Data Storage**
   - Cart data stored in browser's `localStorage` as JSON array of item IDs
   - Persists across page refreshes and browser sessions

---

## JavaScript Functions

### `index.js` - Shared Header & Footer

#### `loadSharedHeader()`
Injects the navigation header into all pages.

**What it does:**
- Finds the `<div id="site-header"></div>` placeholder
- Inserts HTML for header image and navigation menu
- Detects the current page URL
- Adds `aria-current="page"` attribute for accessibility
- Adds `.link-active` class to highlight the active nav link

**Called on:** Page load via `DOMContentLoaded` event

```javascript
loadSharedHeader();
```

---

#### `loadSharedFooter()`
Injects the footer with contact info into all pages.

**What it does:**
- Finds the footer content placeholder
- Inserts contact information and business hours
- Runs on page load

**Called on:** Page load via `DOMContentLoaded` event

```javascript
loadSharedFooter();
```

---

### `products.js` - Cart & Menu Management

#### `addToCart(itemId)`
Adds an item to the shopping cart.

**Parameters:**
- `itemId` (number): Unique ID of the menu item to add

**What it does:**
- Retrieves current cart array from `localStorage` (or creates empty array if none exists)
- Pushes the item ID to the cart array
- Saves updated cart back to `localStorage`
- Logs the item ID to console for debugging

**Example:**
```javascript
addToCart(1);  // Adds pancakes (id: 1) to cart
addToCart(1);  // Can add same item multiple times
```

**Storage structure:**
```javascript
localStorage.cart = "[1, 3, 5, 1]"  // JSON string of IDs
```

---

#### `getCartItems()`
Retrieves all items currently in the cart.

**Returns:**
- Array of item IDs from `localStorage`
- Empty array `[]` if cart doesn't exist yet

**What it does:**
- Parses the JSON string from `localStorage.cart`
- Returns array of item IDs
- Does not fetch item details (name, price, etc.)

**Example:**
```javascript
const items = getCartItems();
console.log(items);  // Output: [1, 3, 5, 1]
```

---

#### `displayCart()`
Renders cart contents on the page. **Currently incomplete.**

**What it should do:**
- Finds the cart display element (`productsCart` variable)
- Gets cart items via `getCartItems()`
- Maps each item ID to display format
- Shows item details in a `<ul>` list

**Current issues:**
1. `productsCart` variable is undefined (not initialized)
2. Only displays item IDs, not item names/prices/images
3. Function is never called anywhere
4. No quantity aggregation (if item added twice, shows duplicate lines)

**What needs fixing:**
```javascript
// Need to define: const productsCart = document.querySelector('.products_cart');
// Need to fetch full item data by ID from menu JSON files
// Need to aggregate quantities for duplicate items
```

---

#### `toggleImageEnlarge(event)`
Opens an enlarged view of product images in a full-screen modal.

**Parameters:**
- `event`: Click event from image element

**What it does:**
1. Gets the clicked image element
2. Creates a `<div class="enlarged-image">` modal overlay (full screen, dark background)
3. Creates a new `<img>` tag with same src/alt
4. Appends modal to the page
5. Closes modal when user clicks anywhere on it

**How it's triggered:**
- Event listener added to every product image in `loadMenu()`
- User clicks a product image → modal appears
- User clicks modal → closes

**CSS classes used:**
- `.enlarged-image` - Full-screen overlay with centered image

---

#### `loadMenu(menuToLoad)`
Loads menu items from JSON files and displays them on the products page.

**Parameters:**
- `menuToLoad` (string): Menu category name: `'breakfasts'`, `'drinks'`, or `'treats'`

**What it does:**

1. **Find the target section**
   - Looks for `<section id="breakfasts">`, `<section id="drinks">`, or `<section id="treats">`
   - Exits safely if section doesn't exist

2. **Add category heading**
   - Inserts an `<h2>` with the menu category name (capitalized)

3. **Fetch JSON data**
   - Loads `assets/menus/{menuToLoad}.json` using `fetch()`
   - Parses JSON response

4. **Loop through each item**
   - For each item in the JSON array:
     - Extracts: `id`, `name`, `image`, `description`, `price`
     - Creates an `<article class="{menuToLoad}-item">`
     - Inserts HTML with all item details and "Add to Cart" button
     - Appends article to the section

5. **Attach click handlers to images**
   - Adds event listener to each image
   - Clicking image triggers `toggleImageEnlarge()`

6. **Error handling**
   - Catches JSON fetch errors and logs to console
   - Logs "menu loaded." when complete

**Example:**
```javascript
loadMenu('breakfasts');
// Loads: assets/menus/breakfasts.json
// Creates: <section id="breakfasts"><article class="breakfasts-item">...</article>...
```

**JSON structure expected:**
```json
{
  "breakfasts": [
    {
      "id": 1,
      "name": "pancakes",
      "image": "assets/images/breakfasts/pancakestack.jpeg",
      "description": "Fluffy pancakes served with syrup and butter.",
      "price": "$5.99"
    },
    ...
  ]
}
```

**Called on:** Page load via `DOMContentLoaded` event

```javascript
document.addEventListener("DOMContentLoaded", () => {
    loadMenu('breakfasts');
    loadMenu('drinks');
    loadMenu('treats');
});
```

---

## Data Flow

### On Page Load
```
1. HTML loads
2. defer scripts load in order: index.js → products.js
3. DOMContentLoaded fires
4. loadSharedHeader() → injects nav
5. loadSharedFooter() → injects footer
6. loadMenu('breakfasts') → fetches JSON, renders items
7. loadMenu('drinks') → fetches JSON, renders items
8. loadMenu('treats') → fetches JSON, renders items
9. Click handlers attached to all images
```

### When User Clicks "Add to Cart"
```
1. Button onclick="addToCart(1)" fires
2. addToCart() retrieves localStorage cart
3. Pushes new item ID to array
4. Saves updated cart to localStorage
5. Item persists across page refreshes
```

### When User Clicks Product Image
```
1. Image click event fires
2. toggleImageEnlarge() creates modal
3. Modal displays full-screen image
4. User clicks modal → modal removed from DOM
```

---

## Common Issues & Fixes

### Cart Not Displaying
**Problem:** `displayCart()` doesn't render anything
**Cause:** Function is never called + `productsCart` is undefined

**Fix:**
```javascript
// 1. Define the cart element
const productsCart = document.querySelector('.products_cart');

// 2. Call displayCart on page load
document.addEventListener("DOMContentLoaded", () => {
    loadMenu('breakfasts');
    loadMenu('drinks');
    loadMenu('treats');
    displayCart();  // Add this line
});
```

### Images Not Enlarging
**Problem:** Clicking product images does nothing
**Cause:** `toggleImageEnlarge()` function was missing

**Status:** ✅ Fixed - function now exists in `products.js`

### Items Show as ID Instead of Names in Cart
**Problem:** Cart displays `[1, 3, 5]` instead of item names
**Cause:** `getCartItems()` returns IDs only, not full item data

**Fix needed:**
- Create a function to look up item details by ID across all menu JSON files
- Map cart IDs to item names/prices
- Update `displayCart()` to use this lookup

---

## Testing Checklist

- [ ] All product images clickable and enlarge on click
- [ ] Add to cart button adds items (check localStorage in DevTools)
- [ ] Cart persists after page refresh
- [ ] Navigation highlights active page
- [ ] Footer displays on all pages
- [ ] Images close when modal clicked
- [ ] Console has no errors
- [ ] Works on mobile/tablet sizes

---

## Browser Compatibility

- Uses ES6 (arrow functions, template literals, const/let)
- Requires `localStorage` support
- Requires `fetch()` API
- Works in: Chrome, Firefox, Safari, Edge (modern versions)

