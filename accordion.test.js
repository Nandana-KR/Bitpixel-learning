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
test("remove is-open class when toggled", function () {
  document.body.innerHTML = `
  <button aria-controls="sect1" aria-expanded="true">Question</button>
  <div id="sect1" class="is-open"></div>
`;
  const button = document.querySelector("button");
  toggleAccordion(button);
  const panel = document.getElementById("sect1");
  expect(panel.classList.contains("is-open")).toBe(false);
  expect(button.getAttribute("aria-expanded")).toBe("false");
});


test("clicking a question opens its panel", function () {
  document.body.innerHTML = `
  <button class="accordion-ques" aria-controls="sect1" aria-expanded="false">Question</button>
  <div id="sect1"></div>
`;
  jest.resetModules();
  require("./accordion");

  const button = document.querySelector(".accordion-ques");
  button.click();

  const panel = document.getElementById("sect1");
  expect(panel.classList.contains("is-open")).toBe(true);
  expect(button.getAttribute("aria-expanded")).toBe("true");
});
