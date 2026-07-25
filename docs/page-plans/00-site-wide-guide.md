# Site-Wide Build Guide

This file defines what every page should share.

## File names
- index.html (Home)
- about.html
- category.html
- products.html
- contact.html

## Shared header and meta tags
Use this in every page head, then customize the title and description per page.

Required head items:
- charset: UTF-8
- viewport: width=device-width, initial-scale=1.0
- title: page-specific
- meta description: page-specific (140-160 chars)
- meta author: your name
- favicon link (optional)
- stylesheet link: assets/css/style.css
- script link (defer): assets/js/main.js

Suggested head template:
- <meta charset="UTF-8">
- <meta name="viewport" content="width=device-width, initial-scale=1.0">
- <title>Local Business Cafe | Page Name</title>
- <meta name="description" content="Page summary for users and search engines.">
- <meta name="author" content="Your Name">
- <link rel="stylesheet" href="assets/css/style.css">
- <script src="assets/js/main.js" defer></script>

## Shared navigation links
Use the same nav on every page, in this order:
- Home -> index.html
- About -> about.html
- Category -> category.html
- Products -> products.html
- Contact -> contact.html

## Shared footer
Include:
- Cafe name
- Address
- Phone
- Email
- Opening hours summary
- Copyright line

## Accessibility rules
- One H1 per page.
- Use heading order (H1 then H2 then H3 as needed).
- Add alt text for meaningful images.
- Keep strong color contrast.
- Keep keyboard-friendly links and form controls.

## Design constraints
- Maximum 3 brand colors.
- Consistent image style.
- Background must not reduce text readability.

## Global checklist
- [x] Same header nav on all pages
- [x] Same footer style on all pages
- [x] Current page link visually highlighted
- [x] Mobile nav works
- [x] No broken links
