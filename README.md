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
