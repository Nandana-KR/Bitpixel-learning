function toggleAction() {
  const buttons = document.querySelectorAll(".show-hidden");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {


      const showItem = document.getElementById(button.getAttribute("aria-controls"));
      showItem.classList.toggle("is-open")
      const isOpen = showItem.classList.contains("is-open");
      button.setAttribute("aria-expanded", isOpen);

      if (isOpen) {
        button.textContent = "Read less";
      } else {
        button.textContent = "Read more";
      }
    });
  });
}

toggleAction();