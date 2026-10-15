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
