# Project Plan - Local Business Cafe

## 1. Project Summary
Build a fully functional, responsive website for a fictional local cafe to promote menu offerings (coffee, drinks, snacks) and provide clear business information.

## 2. Aim
Create a professional multi-page cafe website that helps promote services and products while being easy to navigate on desktop and mobile.

## 2.1 Assessment Targets (Page 2)
- Meet accessibility guidelines (color contrast, semantic structure, optional alt text for non-text elements)
- Apply UX principles (information hierarchy, scannable headers, intuitive navigation)
- Build significant interactivity with custom HTML, CSS, and JavaScript
- Maintain visual consistency (graphics style, undistracted foreground content)
- Use a maximum of 3 brand colors in the web design
- Pass quality checks (W3C HTML, W3C CSS/Jigsaw, JavaScript linting)
- Deploy to cloud hosting (GitHub Pages) and verify parity with local build
- Use Git and GitHub with regular commits and descriptive commit messages

## 2.2 Final Tech Stack Decision

### Chosen Stack
- Front-end architecture: Multi-page static site
- Core technologies: HTML5, CSS3, Vanilla JavaScript (ES6)
- Frameworks: None
- Hosting: GitHub Pages
- Version control: Git + GitHub

### Why This Stack Fits the Requirements
- Rubric asks for custom HTML, CSS, and JavaScript with interactive functionality.
- A no-framework static architecture keeps implementation transparent for validation and grading.
- GitHub Pages is explicitly accepted for final deployment.
- Vanilla JavaScript is sufficient for forms, menu filters, navigation states, and user feedback.

### Quality and Validation Tooling
- HTML validation: W3C Validator (validator.w3.org)
- CSS validation: W3C Jigsaw (jigsaw.w3.org)
- JavaScript lint/validation: JSHint and/or javascriptvalidator.net
- Manual QA: device-width checks and interaction checks in browser dev tools

### Planned Interaction Features (Significant Functionality)
- Category filtering or tabbed product views
- Contact form client-side validation with feedback messages
- Responsive navigation menu behavior on mobile
- Optional UI state feedback (active category, success/error messages)

### Constraints from Assessment
- Maximum 3 brand colors in design system
- Foreground content must remain readable and not distracted by backgrounds
- Semantic heading structure and intuitive navigation required

## 3. Scope (From Guideline Page 1)
### In Scope
- Home page
- About page
- Contact page
- Category page
- Products page
- Responsive layout across major screen sizes

### Out of Scope (for now)
- Online ordering and payment
- User authentication
- Admin dashboard
- Backend database integration

## 4. Required Pages and Acceptance Criteria

### 4.1 Home Page
Purpose: Introduce the business and highlight unique selling points.

Acceptance criteria:
- Clear hero section with cafe name and value proposition
- At least 3 unique selling points visible above the fold
- Navigation links to all required pages
- Mobile-friendly layout

### 4.2 About Page
Purpose: Provide detailed background information.

Acceptance criteria:
- Business story/mission section
- Team or founder summary
- Skills/experience or quality statement relevant to the cafe
- Consistent visual style with other pages

### 4.3 Contact Page
Purpose: Share contact information and optional contact form.

Acceptance criteria:
- Visible contact details (phone, email, address)
- Opening hours section
- Optional contact form with basic validation (name, email, message)
- Embedded map placeholder or location section

### 4.4 Category Page
Purpose: Display menu categories such as drinks, coffee, and snacks.

Acceptance criteria:
- Category cards or sections for drinks, coffee, snacks
- Each category includes short description
- Easy navigation to related products content
- Responsive grid/list layout

### 4.5 Products Page
Purpose: Display products with descriptions, prices, and images.

Acceptance criteria:
- Product entries include name, image, description, and price
- Product grouping by category
- Clear readable pricing
- Layout remains clean on mobile

## 5. Work Breakdown Structure

### Phase 0 - Technical Decisions
- [x] Decide framework approach (recommended: no framework, custom HTML/CSS/JS to match rubric)
- [x] Decide CSS strategy (single stylesheet or modular files)
- [ ] Decide JavaScript structure (single main.js or feature-based files)
- [ ] Decide linting/validation tools and workflow
- [ ] Record decisions in README under "Tech Stack and Tooling"

### Phase 1 - Planning and Content
- [ ] Confirm brand name, tone, and visual direction
- [ ] Finalize required page content (text + product list)
- [ ] Gather or create product images
- [ ] Define color palette and typography (maximum 3 brand colors)
- [ ] Define information hierarchy for each page (header levels and content priority)

### Phase 2 - Project Setup
- [ ] Create folder structure
- [ ] Create shared assets folder (images, icons, styles)
- [ ] Build base layout template (header, nav, footer)
- [ ] Add responsive breakpoints
- [ ] Organize files by type: assets/css, assets/js, assets/images
- [ ] Create consistent, cross-platform file naming convention (lowercase, no spaces)

### Phase 3 - Page Implementation
- [ ] Build Home page
- [ ] Build About page
- [ ] Build Contact page
- [ ] Build Category page
- [ ] Build Products page
- [ ] Implement interactive features with user-controlled actions and feedback
- [ ] Add semantic headings and landmarks for accessibility structure
- [ ] Ensure navigation is intuitive and consistent across all pages

### Phase 4 - QA and Polish
- [ ] Test mobile/tablet/desktop responsiveness
- [ ] Validate links and navigation
- [ ] Verify image optimization and load performance
- [ ] Fix layout and content issues
- [ ] Confirm readable contrast between foreground and background
- [ ] Confirm graphics are consistent in style and color
- [ ] Confirm background visuals do not distract from foreground information
- [ ] Run HTML through W3C validator and log issues
- [ ] Run CSS through W3C Jigsaw validator and log issues
- [ ] Run JavaScript through validator/linter and log issues
- [ ] Record all warnings/errors and document each fix applied

### Phase 5 - Delivery
- [ ] Final review against acceptance criteria
- [ ] Update documentation with completion notes
- [ ] Prepare final submission/release
- [ ] Confirm Git history shows regular progress commits across project phases
- [ ] Confirm commit messages clearly describe each change set
- [ ] Validate HTML with W3C validator (0 issues target)
- [ ] Validate CSS with W3C Jigsaw validator (0 issues target)
- [ ] Lint JavaScript with JSHint or equivalent (no significant issues)
- [ ] Deploy to GitHub Pages and confirm deployed version matches local version
- [ ] Complete README with purpose, user value, and deployment procedure
- [ ] Add feature screenshots and value explanation to README
- [ ] Confirm Git and GitHub history shows development through to deployment

## 6.1 Assessment Compliance Checklist

### Usability and UX
- [ ] Structured layout with clear heading hierarchy
- [ ] Information prioritized and easy to locate
- [ ] Navigation model is intuitive and consistent
- [ ] Site fulfills its purpose: promoting cafe products and services

### Interactivity and Functionality
- [ ] Custom HTML/CSS/JS used across one or more pages
- [ ] Significant interactive functionality implemented
- [ ] User can initiate and control actions
- [ ] UI provides action feedback (success/error/state changes)
- [ ] All project requirements function correctly
- [ ] No broken internal links or dead sections

### Accessibility and Visual Design
- [ ] Sufficient foreground/background contrast
- [ ] Optional alt text provided for meaningful non-text content
- [ ] Graphics are consistent in style and color
- [ ] Foreground content is not visually distracted by backgrounds
- [ ] Color system uses maximum 3 brand colors

### Code Quality and Validation
- [ ] HTML passes official W3C validator
- [ ] CSS passes official W3C Jigsaw validator
- [ ] JavaScript passes linting with no significant issues
- [ ] Code is organized into clear, commented sections
- [ ] External code is clearly attributed in comments and README
- [ ] Validation reports are documented with issues and fixes

### Project Structure and Delivery
- [ ] Files organized by type in clear directories
- [ ] Filenames are descriptive, lowercase, and space-free
- [ ] README explains purpose, value, and deployment steps
- [ ] README includes screenshots, feature description, and user value
- [ ] Version control via Git and GitHub used through development
- [ ] Commits are made regularly (not only at the end)
- [ ] Each commit message describes what changed since the previous commit
- [ ] Final code deployed to GitHub Pages and tested

## 7.1 Version Control and Deployment Protocol

### Commit Cadence
- Make commits at logical checkpoints (setup, each page completion, feature completion, bug fixes, QA fixes, deployment prep).
- Avoid one large end-of-project commit.

### Commit Message Standard
- Format: type(scope): short summary
- Examples:
	- feat(home): add hero section and unique selling points
	- feat(products): add product cards with prices and images
	- fix(nav): resolve broken link to contact page
	- style(responsive): improve mobile layout for category grid
	- docs(readme): add deployment steps and feature screenshots

### Push Routine
- After each meaningful commit batch:
	- git add .
	- git commit -m "<descriptive message>"
	- git push

### Deployment Expectation
- Deploy final version using GitHub Pages.
- Verify deployed site behavior and layout matches local tested version.
- Record deployed URL in README and in project notes.

### GitHub Pages Deployment Steps
1. Open the repository on GitHub.
2. Go to Settings.
3. Open Pages in the left navigation.
4. Under Build and deployment -> Source, select Deploy from a branch.
5. Select the branch:
	- Use main for modern repositories.
	- Use master only if that is the repository default branch.
6. Select folder: /(root).
7. Click Save.
8. Wait for publishing, then refresh the Pages section.
9. Copy the live URL shown by GitHub Pages.
10. Test the live site and confirm it matches the local development version.
11. Add the live URL to README and final submission notes.

### Deployment Verification Checklist
- [ ] GitHub Pages source branch and root folder configured correctly
- [ ] Live URL generated and accessible
- [ ] Navigation works on deployed site
- [ ] Responsive layout verified on deployed site
- [ ] Images, styles, and scripts load correctly on deployed site
- [ ] Deployed version matches latest expected commit

## 7.2 Testing and Validation Protocol

### Required Tools
- HTML validator: https://validator.w3.org/#validate_by_input
- CSS validator: http://jigsaw.w3.org/css-validator/
- JavaScript validator/linter: https://javascriptvalidator.net/

### Recommended Tooling Decision (for this project)
- Framework: None (custom HTML/CSS/JS is safest for rubric compliance)
- HTML validation: W3C Validator
- CSS validation: W3C Jigsaw Validator
- JavaScript linting: JSHint (or JavaScript Validator configured to strict checks)
- Optional formatting: Prettier (only for consistent formatting, not a grading requirement)

### Validation Workflow
1. Validate HTML for each page after major edits.
2. Fix errors first, then review warnings.
3. Re-run HTML validation until no blocking issues remain.
4. Validate CSS stylesheet(s), then fix and re-run.
5. Validate/lint JavaScript, then fix and re-run.
6. Re-test the site in browser after each fix batch.
7. Record every issue and fix in the validation log.

### Validation Log Template
Use this table in project documentation (README or project log).

| Date | Tool | Page/File | Issue Type | Message Summary | Fix Applied | Result |
|---|---|---|---|---|---|---|
| YYYY-MM-DD | HTML Validator | index.html | Error/Warning |  |  | Pass/Fail |
| YYYY-MM-DD | CSS Validator | assets/css/style.css | Error/Warning |  |  | Pass/Fail |
| YYYY-MM-DD | JS Validator | assets/js/main.js | Error/Warning |  |  | Pass/Fail |

### Evidence Requirements
- Keep screenshots or copied summaries of validator results.
- Document the fix process, not only the final pass.
- Ensure final submission includes proof that validation was completed.

## 6. Milestones
| Milestone | Target Date | Done Criteria |
|---|---|---|
| M1: Planning Complete | TBD | Content and UI direction finalized |
| M2: Core Layout Complete | TBD | Shared layout and navigation implemented |
| M3: All Pages Built | TBD | 5 required pages complete |
| M4: QA Complete | TBD | Responsive and content checks passed |
| M5: Final Delivery | TBD | Project ready for submission |

## 7. Risks and Mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Missing content or images | Medium | Use placeholders, replace later |
| Inconsistent styling across pages | Medium | Use shared style system and components |
| Mobile layout breakage | High | Test at each page completion step |

## 8. Definition of Done
- All 5 required pages are complete and linked.
- Products include descriptions, prices, and images.
- Site is responsive and usable on mobile and desktop.
- Accessibility and UX criteria are met.
- HTML, CSS, and JavaScript validation/lint checks pass.
- No broken internal links exist.
- Content matches the full project guideline.
- README and evidence (screenshots + deployment notes) are complete.
- Final deployed site matches the development version.

## 9. Notes for Next Guideline Pages
As you share the next pages, this plan will be refined with:
- Exact feature constraints
- Marking rubric alignment
- Technical requirements (if specified)
- Submission checklist
