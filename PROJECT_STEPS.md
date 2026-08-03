# Project Documentation Log

Use this file as a complete record of your project from planning to final delivery.

## 1. Project Snapshot
- Project name:Anime Cafe
- Owner:
- Start date:23/7/2026
- Target deadline:31/8/2026
- Current status: started

## 2. Goal and Scope
### Main goal
to create a functional, responsive website for a fictional local cafe to promote menu offerings (coffee, drinks, snacks) and provide clear business information.

### Scope (what is included)
-   Home page
-   About page
-   Contact page
-   Category page
-   Products page
-   Responsive layout across major screen sizes
- 

### Out of scope (what is not included)
- 
- 

## 3. Requirements
### Functional requirements
- [ ] FR-01:
- [ ] FR-02:
- [ ] FR-03:

### Non-functional requirements
- [ ] NFR-01: Performance
- [ ] NFR-02: Security
- [ ] NFR-03: Accessibility

## 4. Tools and Environment
- OS: Windows
- IDE: Visual Studio Code
- Language(s): HTML5, CSS3, JavaScript (ES6)
- Framework(s): None (vanilla stack)
- Database: None (static front-end project)
- Version control: Git + GitHub
- Hosting/Deployment target: GitHub Pages
- JavaScript file structure: Single file at scripts/index.js

### Tech Stack Decision Notes
- Reason for no framework: The rubric emphasizes custom HTML/CSS/JS and validation quality.
- Linting/validation tools selected:
  - HTML: W3C validator
  - CSS: W3C Jigsaw validator
  - JavaScript: JSHint and javascriptvalidator.net
  - Workflow: run validators after each major page edit and log fixes
- UX/accessibility constraints:
  - Maximum 3 brand colors
  - Strong contrast between text and background
  - Clear heading hierarchy and intuitive navigation

## 5. Step-by-Step Plan
### Phase 1: Planning
- [x] Define project objective
- [x] Gather requirements
- [x] Create initial architecture sketch
- [x] Define milestones and deadlines

### Phase 2: Setup
- [x] Initialize project structure
- [x] Install dependencies
- [x] Configure environment variables
- [x] Create base README and docs

### Phase 3: Development
- [x] Build core feature A
- [x] Build core feature B
- [x] Build UI/UX elements
- [x] Integrate APIs/services
- [x] Handle errors and edge cases
- [x] Build cart functionality (add/remove items, quantity)
- [x] Build checkout page and order summary

### Phase 4: Testing
- [ ] Write unit tests
- [ ] Run integration tests
- [ ] Manual QA checklist
- [ ] Fix identified issues

#### Issues Found & Fixed

**Issue 1: Product images not enlarging on click**
- **Cause:** `toggleImageEnlarge()` function was called but not defined
- **Solution:** Implemented the function to create a modal overlay, display the enlarged image, and close on click
- **Date Fixed:** 2026-07-28

**Issue 2: Cart counter not working for quantities**
- **Cause:** Using `arr.push(item)` created a single-item array and counted only that array instead of the full cart array
- **Root:** Logic was `let arr = []; arr.push(item); arr.reduce(...)` which always returned 1. Also `let arr` was inside the for loops, resetting to empty array on each iteration
- **Solution:** Moved `let arr` outside the for loops so it accumulates across iterations, then used `reduce()` on the full array to properly count occurrences
- **Date Fixed:** 2026-07-29

**Issue 3: Checkout only fetching breakfasts.json**
- **Cause:** Only fetched one menu file, so drinks (IDs 6-10) and treats (IDs 11-15) items not found
- **Solution:** Fetched all three menus (breakfasts, drinks, treats), combined them into single `data` array using spread operator, then searched across all items with a single loop
- **Implementation:** Created array: `const data = [...breakfastsData.breakfasts, ...drinksData.drinks, ...treatsData.treats]`
- **Date Fixed:** 2026-07-29

**Issue 4: Duplicate rows in checkout table**
- **Cause:** If same item added twice, loops through cart twice and creates two separate table rows instead of one row with quantity: 2
- **Solution:** Moved array initialization outside the for loops so it accumulates items across iterations, allowing proper quantity aggregation
- **Date Fixed:** 2026-07-29

**Issue 5: Total calculation running before table rows added (timing issue)**
- **Cause:** Total calculation code ran immediately after fetch call, but fetch is asynchronous—table rows hadn't been added to DOM yet, so `tBody.rows.length` was 0
- **Root:** Fetch returns a Promise, but total logic wasn't waiting for it to complete
- **Solution:** Made `loadCheckout()` function `async` and added `await` before the fetch call, ensuring rows are added to DOM before total is calculated
- **Date Fixed:** 2026-07-29

**Issue 6: Total calculation not multiplying quantity by price**
- **Cause:** Code only added unit price to total, ignoring quantity
- **Root:** Used `total += price` instead of `total += quantity * price`
- **Solution:** Added `const quantity = parseInt(row.cells[1].innerText)` and multiplied: `total += quantity * price`
- **Date Fixed:** 2026-07-29

**Issue 7: Price parsing failed due to dollar sign**
- **Cause:** Price string is "$5.99", but `parseFloat("$5.99")` returns `NaN` (can't parse the `$`)
- **Solution:** Used `.replace('$', '')` to strip the dollar sign before parsing: `parseFloat(row.cells[2].innerText.replace('$', ''))`
- **Date Fixed:** 2026-07-29

**Issue 8: Quantity counter parsing broken with buttons**
- **Cause:** Added +/- buttons to quantity cell, so `innerText` returned "-  5  +" instead of just "5", causing `parseInt()` to fail
- **Solution:** Stored quantity in `data-quantity` attribute on each row: `row.setAttribute('data-quantity', quantity)`, then read with `row.dataset.quantity`
- **Date Fixed:** 2026-07-30

**Issue 9: removeFromCart() removing all instances instead of one**
- **Cause:** Used `.filter(item => item !== itemId)` which removes ALL occurrences of that ID
- **Example:** Cart `[1, 3, 1, 5]` minus pancakes → `[3, 5]` instead of `[3, 1, 5]`
- **Solution:** Changed to use `.indexOf()` and `.splice()` to remove only the first occurrence
- **Date Fixed:** 2026-07-30

**Issue 10: Total not updating when adjusting quantities**
- **Cause:** Clicking +/- buttons updated localStorage but didn't refresh the table display or recalculate total
- **Solution:** Called `loadCheckout()` at end of `addToCart()` and `removeFromCart()` to reload entire checkout with updated data
- **Date Fixed:** 2026-07-30

**Issue 11: Total amount cell reference broke after adding colspan to Total heading**
- **Cause:** Changed "Total" heading cell to use `colspan="2"`, reducing the totals row from 3 cells to 2 cells. Code still referenced `totalsRow.cells[2]` which no longer existed
- **Root:** `colspan="2"` merges two cells into one, so `cells[2]` (3rd cell) becomes `cells[1]` (2nd cell)
- **Solution:** Changed `totalsRow.cells[2].innerText` to `totalsRow.cells[1].innerText`
- **Date Fixed:** 2026-07-31

**Issue 13: Unused `removeFromCart()` function in products.js**
- **Cause:** A `removeFromCart()` function was defined in `products.js` but never called — the products page only needs add-to-cart functionality, not removal
- **Decision:** Chose not to use it on the products page; removal is handled on the checkout page via `checkout.js` instead
- **Solution:** Left function unused / removed from products.js to keep the file clean
- **File:** `scripts/products.js`
- **Date Fixed:** 2026-08-01

**Issue 14: `addToCart()` accidentally removed from products.js**
- **Cause:** When removing the unused `removeFromCart()`, `addToCart()` was also removed, breaking the "Add to Cart" buttons on the products page (inline `onclick="addToCart()"` had no definition to call)
- **Solution:** Re-added `addToCart()` to `products.js` — it must exist in both files since `checkout.js` is not loaded on the products page
- **File:** `scripts/products.js`
- **Date Fixed:** 2026-08-01

**Issue 15: JSLint false positive — `addToCart` flagged as unused in products.js**
- **Cause:** JSLint cannot analyse function calls inside template literal strings. The call `onclick="addToCart(${ItemId})"` is treated as plain text, so the linter does not recognise it as a JavaScript call
- **Decision:** False positive — the function is genuinely used via an inline HTML event handler generated at runtime. Warning safely ignored
- **File:** `scripts/products.js`, line 3
- **Date Noted:** 2026-08-01
- **Cause:** `loadSharedFooter()` had `const currentPage = window.location.pathname.split("/").pop() || "index.html";` copied from `loadSharedHeader()` but never used in the footer function
- **Solution:** Commented out the unused variable to suppress the linter warning
- **File:** `scripts/index.js`, `loadSharedFooter()` function
- **Date Fixed:** 2026-08-01

**Issue 16: Added Empty Cart control on products page**
- **Cause:** Users needed a quick way to clear cart without leaving the products page
- **Solution:** Updated `showCartAmount()` in `products.js` to render an `Empty Cart` button alongside `Cart (n)`, and refresh cart UI immediately after clearing
- **File:** `scripts/products.js`
- **Date Fixed:** 2026-08-03

**Issue 17: Cart not emptying after successful checkout**
- **Cause:** Checkout completion flow did not consistently clear cart state before refresh
- **Solution:** Updated checkout completion to call `clearCart()` and then reload checkout state so the empty-cart message is shown after payment
- **File:** `scripts/checkout.js`
- **Date Fixed:** 2026-08-03

**Issue 18: Added loading spinner to checkout page**
- **Cause:** Checkout page needed clear visual feedback while cart/menu data loads
- **Solution:** Added `#loader` markup in `loadCheckout()` and loading animation styles in `checkout.css`; spinner now displays during load state
- **Files:** `scripts/checkout.js`, `assets/css/checkout.css`
- **Date Fixed:** 2026-08-03

**Issue 19: Loader did not disappear after checkout loaded**
- **Cause:** Loader hide logic was bound to `window.load` (fires once), but checkout re-renders recreate `#loader` on later updates
- **Solution:** Moved hide logic into `loadCheckout()` and hide loader in a `finally` block so it is hidden on every render path (success, empty cart, and error)
- **File:** `scripts/checkout.js`
- **Date Fixed:** 2026-08-03

### Phase 5: Deployment
- [ ] Prepare production configuration
- [ ] Deploy to target environment
- [ ] Verify deployment health checks
- [ ] Share release notes

### Phase 6: Wrap-Up
- [ ] Final documentation review
- [ ] Final demo or submission
- [ ] Retrospective: lessons learned

## 6. Milestones
| Milestone | Target Date | Status | Notes |
|---|---|---|---|
| M1: Planning Complete |  | Not started |  |
| M2: Setup Complete |  | Not started |  |
| M3: MVP Ready |  | Not started |  |
| M4: Testing Complete |  | Not started |  |
| M5: Final Delivery |  | Not started |  |

## 7. Daily/Session Work Log
Copy this block for each work session.

### Session YYYY-MM-DD
- Start time:
- End time:
- Focus area:
- Tasks completed:
  - 
- Issues/blockers:
  - 
- Decisions made:
  - 
- Next actions:
  - 

## 8. Issues and Risk Tracker
| ID | Issue/Risk | Impact | Owner | Status | Mitigation |
|---|---|---|---|---|---|
| R-01 |  |  |  | Open |  |
| R-02 |  |  |  | Open |  |

## 9. Change Log
| Date | Change | Reason | Author |
|---|---|---|---|
|  | Initial documentation file created | Project tracking |  |

## 10. Validation and Testing Evidence

### Validation Tools
- HTML: https://validator.w3.org/#validate_by_input
- CSS: http://jigsaw.w3.org/css-validator/
- JavaScript: https://javascriptvalidator.net/

### Validation Checklist
- [ ] HTML validated
- [ ] CSS validated
- [ ] JavaScript validated/linted
- [ ] Errors fixed and re-tested
- [ ] Warnings reviewed and addressed where relevant

### Error/Warning Fix Log
Document every issue and how you fixed it.

| Date | Tool | Page/File | Issue Type | Message Summary | Fix Applied | Result |
|---|---|---|---|---|---|---|
| YYYY-MM-DD | HTML Validator | index.html | Error/Warning |  |  | Pass/Fail |
| YYYY-MM-DD | CSS Validator | assets/css/style.css | Error/Warning |  |  | Pass/Fail |
| YYYY-MM-DD | JavaScript Validator | assets/js/main.js | Error/Warning |  |  | Pass/Fail |

### Validation Notes
- Before fix:
- After fix:
- Retest status:

## 11. Version Control and Deployment Evidence

### Commit and Push Routine
- [ ] Added files with `git add .`
- [ ] Committed with descriptive message
- [ ] Pushed to GitHub with `git push`

### Commit History Log
Use this to prove regular commits during development.

| Date | Commit Message | Files/Features Changed | Pushed (Y/N) |
|---|---|---|---|
| YYYY-MM-DD | feat(home): add hero and USP section | index.html, assets/css/style.css | Y |

### Deployment Record (GitHub Pages)
- Repository URL:
- Pages URL:
- Branch used for Pages (main/master):
- Folder used for Pages (root/docs):
- Deployment date:
- Deployment verified on mobile and desktop: Yes/No

### Deployment Verification Notes
- Navigation check:
- Visual consistency check:
- Broken links check:
- Final parity with local version:

## 12. Final Summary
### What was delivered
- 

### What went well
- 

### What to improve next time
- 
