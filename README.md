# Personal Profile Webpage

## Project Intent

A personal profile webpage built for Day 1 of the BitPixel learning plan.
It practices semantic HTML (`header`, `nav`, `main`, `section`, `article`,
`aside`, `footer`), meaningful image `alt` text, a logical heading hierarchy,
and basic CSS for layout, spacing, colors, and alignment.

## How to Run

Open `profile.html` in any web browser. No setup needed.

## Manual Testing Steps

1. Open `profile.html`. The page loads without errors.
2. The profile photo shows as a circle in the header, beside the name and title.
3. The nav links (About, Skills, Projects, Contacts) each jump to the matching section.
4. All sections are visible and spaced apart; the Connect aside looks distinct.
5. The footer copyright line is centered.
6. With images disabled, the image `alt` text appears in its place.


## Screenshots

Screenshots of the page are available in the `images` folder:

- `images/screenshot.png` - full profile page
- `images/browser-tab.png` - browser view showing the page title "My Profile"


## Note

This is an ongoing learning project and will be updated as I progress.


## Day 2 - Modifications and Contact Form

### What changed on Day 2
- Expanded the About and Projects content and improved the overall layout.
- Converted the skills into a semantic list and made the email and LinkedIn
  into proper links.
- Added an accessible contact form in the Contacts section.

### Contact form details
The form collects Name, Email, Subject, and Message, and uses built-in HTML
validation:
- `required` on all fields.
- `type="email"` to validate the email format.
- `pattern` on the Name field to allow letters and spaces only.
- `minlength` and `maxlength` on the Message field.
- Each input is associated with a `<label>` using `for`/`id` for accessibility.

### Contact form test cases
1. Required fields: Leave all fields empty and click "Send Message".
   Submission is blocked and the first empty required field is highlighted.
2. Name format: Enter a name with numbers (e.g. "Nandana1"). Submission is
   blocked with "Please use letters and space only". "Nandana R" passes.
3. Email format: Enter an invalid email (e.g. "hello"). Submission is blocked
   until a valid email like "name@example.com" is entered.
4. Message length: Enter fewer than 10 characters and submit. Submission is
   blocked asking to lengthen the text. 10+ characters passes.
5. Label association: Click a label's text (e.g. "Email"). The cursor moves
   into that field, confirming the label is linked.
6. Keyboard navigation: Press Tab from the top of the page. Focus moves through
   Name, Email, Subject, Message, and the Send button in order with a visible
   outline. Press Enter on the button to submit.
7. Validation feedback: After interacting with a field, invalid fields show a
   red border and valid fields show a green border.


## Day 2 Screenshot

Screenshot of the contact form is available in the `images` folder:

- `images/Screenshot_Day_2.jpeg` - contact form with validation



## Day 3 - Git Workflow

Practiced the team Git workflow: feature branches, commits, pull requests, and
interactive rebase.

### What I did
- Created a feature branch `feature/contact-form` following the `feature/`
  naming convention.
- Committed the Day 1-2 work on the branch and pushed it to GitHub.
- Opened a pull request with a summary, how-to-test steps, and a screenshot.
- Practiced interactive rebase to squash several small commits into one clean
  commit, then updated the branch with a safe force-push.


## Day 4 - CSS Fundamentals (Style Decisions)

Added a styling foundation in a new file `styles/main.css`, covering the box
model, a CSS reset, and a responsive container pattern.

### Reset
- `* { margin: 0; padding: 0; box-sizing: border-box; }` removes inconsistent
  browser default spacing so every browser starts from the same clean base.
- `box-sizing: border-box` keeps padding and borders inside an element's set
  width, so boxes do not grow unexpectedly.

### Container
- A reusable `.container` class (`max-width: 960px; margin: 0 auto;
  padding: 0 20px;`) centers content in a readable column.
- `max-width` caps the width on large screens and lets content shrink on small
  screens, so there is no horizontal scroll or layout shift on resize.

### Header and footer
- Header and footer use full-width background colors, while their content sits
  inside `.container` so it aligns with the main content.
- The header uses a light background; the footer uses a dark navy background
  with white text, making the two visually distinct.
- The header content (photo and name) is laid out in a row using Flexbox
  (`.header-inner`).

### Navigation
- The nav links are centered using `display: flex` with `justify-content:
  center`, and spaced using `gap`.

### Files
- `styles/basic.css` - element styles from Days 1-3.
- `styles/main.css` - Day 4 reset, container, and layout foundation.

### How to Test
1. Open `profile.html`. The content sits in a centered column.
2. Resize the browser window narrow and wide. Content shrinks and grows with no
   horizontal scrollbar and no layout jumping.
3. The header (light) and footer (dark navy) are clearly distinct.

### Day 4 Screenshot

- `images/Screenshot_Day_4.jpeg` - Day 4 layout with reset, container, and styled header/footer


## Day 5 - Flexbox Layout

Built a responsive two-column layout using Flexbox.

- Two columns: sidebar (`aside`) + main content, via `.layout { display: flex }`.
- Content uses `flex: 1` (fills space); sidebar uses `flex: 0 0 250px` (fixed width).
- `order` places the sidebar on the left while keeping content first in the HTML.
- `@media (max-width: 768px)` stacks the columns vertically on small screens.

Screenshots:
- `images/Screenshot_Day_5_wide.jpeg` - two columns (wide screen)
- `images/Screenshot_Day_5_narrow.jpeg` - stacked (small screen)


## Day 6 - CSS Grid Portfolio

Built a responsive portfolio card grid in `portfolio.html` (styles in
`styles/portfolio.css`).

- Grid uses `repeat(auto-fit, minmax(250px, 1fr))`, so cards reflow from
  4 columns down to 1 on mobile with no media queries.
- Each card has an image, title, description, and a "View Project" button.



## Image Optimization

- Card image files are kept small (under 20 KB each) for fast loading.
- `object-fit: contain` sizes images cleanly inside each card without stretching.
- Images are served close to their displayed size, avoiding large downloads.
- Lazy loading (`loading="lazy"`) is another key technique: it defers off-screen
  images until the user scrolls to them, useful on image-heavy pages.
- Larger images would be compressed with a tool like TinyPNG or Squoosh.


### Day 6 Screenshot
- `images/Screenshot_Day_6.jpeg` - responsive portfolio grid

## Day 7 - Deployment (GitHub Pages)

The site is deployed with GitHub Pages and is live at:

**Live URL:** https://nandana-kr.github.io/Bitpixel-learning/

`profile.html` was renamed to `index.html` so it loads automatically as the
home page. Social preview (Open Graph) meta tags were added to `index.html`
so shared links show a title, description, and image.

### Deployment steps
1. Push the site files to the `main` branch on GitHub.
2. In the repository, go to Settings > Pages.
3. Under "Build and deployment", set Source to "Deploy from a branch".
4. Choose branch `main` and folder `/ (root)`, then Save.
5. Wait 1-2 minutes. GitHub builds and publishes the site at the live URL.
6. Any future push to `main` automatically redeploys the site.

### Rollback steps
If a change breaks the live site, roll back to a previous working version:
1. Find the last good commit: `git log --oneline`.
2. Revert the bad commit: `git revert <commit-hash>` (creates a new commit that
   undoes the change, keeping history intact).
3. Push to `main`: `git push origin main`.
4. GitHub Pages automatically redeploys the previous working version in 1-2 min.

Alternatively, revert the merge of a bad pull request on GitHub using the
"Revert" button on the merged PR.

### How to test
1. Open the live URL. The profile page loads as the home page.
2. Click "Portfolio" to open the portfolio page; click "Home" to return.
3. Resize the window and check the mobile view - layouts stay readable.


## Day 8 - Design System and Theme Toggle

Added a small design system using CSS variables (design tokens) and a
light/dark theme toggle that persists the user's choice.

### Tokens
- Defined tokens in `styles/token.css` for colors, spacing, and typography.
- Tokens are declared on `:root` so they are available globally.
- Components (header, cards, buttons, footer, sidebar) use `var(--token)`
  instead of hardcoded values, so the design is consistent and easy to change.

### Theme toggle

- Tokens for colors, spacing, and typography are defined in `styles/token.css`
  on `:root`, and used across the header, cards, buttons, and footer.
- A `.dark` block overrides the token values, so one class re-themes the whole
  site.
- `theme.js` toggles the `dark` class on click and saves the choice in
  `localStorage`, so the theme persists across reloads and pages.

### How to test
1. Click the theme toggle - the page switches light/dark.
2. Reload - the chosen theme stays.

### Day 8 Screenshot
- `images/Screenshot_Day_8.jpeg` - the site in dark mode

## Day 9 - Sass and BEM

Introduced Sass and the BEM naming convention for more scalable styles.

- Converted the portfolio styles into Sass partials in `styles/scss/`:
  `_variables.scss` (spacing, typography), `_base.scss` (reset and body),
  and `_components.scss` (header, grid, card, footer), combined in
  `main.scss` with `@use`.
- Refactored the card to BEM: block `card`, elements `card__image`,
  `card__title`, `card__description`, `card__link`.
- Theme colors stay as CSS custom properties so the dark mode toggle keeps
  working at runtime, while Sass `$` variables handle compile-time values.
- Added an npm script to compile Sass: `npm run build:css`, which outputs
  `styles/portfolio.css`.

### How to test
1. Run `npm install`, then `npm run build:css` - Sass compiles with no errors.
2. Open `portfolio.html` - the cards look the same and the theme toggle works.

## Day 10 - Accordion

Made an accordion in `faq.html`, with styles in `styles/faq.css` and the
toggle code in `accordion.js`.

- Click a question to open or close its answer.
- It also works with the keyboard - press Enter or Space.
- The answer opens and closes with a smooth animation.
- The `aria-expanded` attribute changes to true or false so screen readers
  know if a section is open or closed.

### How to test
1. Open `faq.html` in a browser.
2. Click a question - the answer opens and closes.
3. Press Tab to a question, then Enter or Space - it opens and closes.

### Running the automated test
The toggle logic is unit-tested with Jest.

1. Run `npm install` to install dependencies (including Jest).
2. Run `npm test`.
3. The test passes - it confirms that toggling adds the `is-open` class to the
   panel and sets the button's `aria-expanded` to `true`.

The toggle logic was moved into a `toggleAccordion(button)` function in
`accordion.js` and exported with `module.exports` so the test can import and
check it directly.


### Day 10 Screenshots
- `images/Screenshot_Day_10.jpeg` - the FAQ accordion
- `images/Screenshot_day_10_unit_test.png` - Jest test passing


## Day 11 - Responsive Design (Mobile-First)

Refactored the site to a mobile-first approach, added tablet and desktop
breakpoints, and made the typography scale fluidly.

### What I did
- Refactored `styles/main.css` to mobile-first: the base styles describe the
  phone layout (single column, stacked), and `min-width` media queries add
  changes as the screen grows.
- Added two breakpoints: tablet at `768px` (profile card becomes a row) and
  desktop at `1024px` (sidebar sits beside the main content).
- Made typography fluid with `clamp()`. Defined `--font-size-h1`,
  `--font-size-h2`, and `--font-size-h3` as shared tokens in `styles/token.css`
  and applied them to the headings.
- Applied the same fluid headings to the portfolio page by editing the Sass
  partial `styles/scss/_components.scss` and recompiling with `npm run build:css`.
- Cleaned up CSS units for consistency: `rem` for font sizes and spacing,
  `%` for widths relative to a parent, and `px` only for borders and radii.
  Converted the spacing tokens (`--space-sm/md/lg`) to `rem`.


### How to test
1. Open `index.html` and slowly resize the browser from narrow to wide.
2. The layout adapts cleanly at mobile, tablet, and desktop widths, with no
   horizontal scrollbar.
3. Headings grow and shrink smoothly as the window resizes.

### Day 11 Screenshots
- `images/Screenshot_Day_11_mobile.jpeg` - stacked single-column layout (mobile)
- `images/Screenshot_Day_11_tablet.jpeg` - profile row, sidebar on top (tablet)
- `images/Screenshot_Day_11_desktop.jpeg` - sidebar beside content (desktop)

## Day 12 - CSS Transitions and Animations

Added smooth animations to make the site feel more polished, without being
distracting.

### What I animated
- **Cards** - lift up a little when you hover over them.
- **Buttons** - background color fades on hover.
- **Links (nav, header, sidebar)** - fade slightly on hover using opacity.
- **Sidebar links** - given a different teal color (`--color-link-sidebar`) so
  they stand out from the other links in a professional way.
- **Theme toggle** - the page colors fade smoothly when switching light/dark
  mode, instead of changing instantly.

### Why I made these choices
- I animated only the needed properties (`background-color`, `color`,
  `opacity`, `transform`), not `all`, so it stays fast.
- I used `transform` for the card lift because it is smooth and does not move
  the page layout.
- I used `opacity` for link hovers because it fades smoothly and is light on
  performance.
- I kept the time short (0.2s to 0.3s) so the animations are quick and not
  distracting.


## Day 13 - BEM Naming Convention

Refactored the header (and extra: sidebar) to use BEM naming, so the CSS is
consistent with no class conflicts. The card was already BEM from Day 9.

### BEM naming rules I follow
- **Block** - a standalone component. Example: `.header`, `.card`, `.sidebar`.
- **Element** - a part inside a block, joined with two underscores (`__`).
  Example: `.header__link`, `.card__title`, `.sidebar__heading`.
- **Modifier** - a variation, joined with two dashes (`--`).
  Example: `.sidebar__link--github`, `.sidebar__link--linkedin`.

### Guidelines
- Elements stay flat - I use `.card__title`, not `.card__body__title`.
- The base class holds shared styles; a modifier only holds what is different.
  Example: `.sidebar__link` sets the shared transition, and the modifiers
  `--github` / `--linkedin` only change the link color.
- Utility classes like `.container` can sit next to a BEM class on the same
  element (for example `class="container header__inner"`).
- Colors come from CSS variables in `:root` (and `.dark` for dark mode), so the
  BEM classes stay consistent and work in both themes.

### What I refactored
- Header: `header` tag styles became the `.header` block with elements like
  `.header__inner`, `.header__image`, `.header__name`, `.header__title`,
  `.header__link`, and `.header__toggle`.
- Sidebar: `.sidebar` block with `.sidebar__heading`, `.sidebar__text`,
  `.sidebar__list`, `.sidebar__link`, plus `--github` and `--linkedin` modifiers.
- Removed old class names (like `.profile-card` and `.designation`) so there are
  no leftover or conflicting styles.
