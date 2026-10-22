// 1. Find the button and the <html> element
const toggleButton = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
// 2. When clicked: toggle dark AND save the choice
toggleButton.addEventListener("click", function () {
  htmlElement.classList.toggle("dark");

  // save whether we're now in dark mode
  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
}