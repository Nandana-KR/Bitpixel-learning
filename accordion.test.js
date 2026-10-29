const { toggleAccordion } = require("./accordion");
test("adds is-open class when toggled", function () {
  document.body.innerHTML = `
  <button aria-controls="sect1" aria-expanded="false">Question</button>
  <div id="sect1"></div>
`;
  const button = document.querySelector("button");
  toggleAccordion(button);

  const panel = document.getElementById("sect1");
  expect(panel.classList.contains("is-open")).toBe(true);
  expect(button.getAttribute("aria-expanded")).toBe("true");

});
