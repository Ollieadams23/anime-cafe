# Anime Cafe

A responsive multi-page website for a fictional local cafe to promote coffee, drinks, and snacks.

## Recent Updates
- Added a loading spinner on the checkout page to provide feedback while checkout content loads.
- Fixed checkout loader lifecycle bug so the spinner now disappears correctly after checkout render completes.

## Tech Stack and Tooling

### Core Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- No front-end framework

### Project Structure Decisions
- Single CSS file: assets/css/style.css
- Single JavaScript file: scripts/index.js
- Multi-page HTML structure:
  - index.html
  - about.html
  - category.html
  - products.html
  - contact.html

### Validation and Linting
- HTML: W3C Validator (https://validator.w3.org/#validate_by_input)
- CSS: W3C Jigsaw Validator (http://jigsaw.w3.org/css-validator/)
- JavaScript: JSHint and javascriptvalidator.net

### Why This Stack
- Matches rubric requirement for custom HTML, CSS, and JavaScript.
- Keeps code simple and easy to assess.
- Supports responsive design and required interactivity.
- Easy to deploy on GitHub Pages.

## Deployment Target
- GitHub Pages
