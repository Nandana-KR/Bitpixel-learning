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

