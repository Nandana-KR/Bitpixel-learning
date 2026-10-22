const toggleButton = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
toggleButton.addEventListener("click", function () {
  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
}