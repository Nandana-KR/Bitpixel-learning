
const buttons = document.querySelectorAll(".accordion-ques");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    panel.classList.toggle("is-open");
    const isOpen = panel.classList.contains("is-open");
    button.setAttribute("aria-expanded", isOpen);

  });
});