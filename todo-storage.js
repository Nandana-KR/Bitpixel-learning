const saved = localStorage.getItem("Task");
console.log(saved);
const add = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const ulist = document.querySelector("#todo-list");
const clear = document.getElementById("clear-btn");
let result = JSON.parse(saved) || [];
result.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ulist.appendChild(li);
});
add.addEventListener("submit", function (event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.textContent = addList(input.value);
  ulist.appendChild(li);
  localStorage.setItem("Task", JSON.stringify(result));

});
clear.addEventListener("click", function () {
  localStorage.removeItem("Task");
  result = [];
  ulist.innerHTML = "";
});
function addList(task) {
  result.push(task);
  return task;
}