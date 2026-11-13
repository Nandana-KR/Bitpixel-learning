const saved = localStorage.getItem("Task");
console.log(saved);
const add = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const ulist = document.querySelector("#todo-list");
const clear = document.getElementById("clear-btn");
let result = JSON.parse(saved) || [];

function showTask(task) {
  const li = document.createElement("li");
  li.classList.add("todo__item");
  li.textContent = task;
  ulist.appendChild(li);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo__remove");
  deleteBtn.textContent = "remove";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    const indx = result.indexOf(task);
    result.splice(indx, 1);
    localStorage.setItem("Task", JSON.stringify(result));
    li.remove();
  });
}

function addList(task) {
  result.push(task);
  return task;
}

result.forEach((item) => {
  showTask(item);
});


add.addEventListener("submit", function (event) {
  event.preventDefault();
  showTask(addList(input.value));
  localStorage.setItem("Task", JSON.stringify(result));
  input.value = "";
});


clear.addEventListener("click", function () {
  localStorage.removeItem("Task");
  result = [];
  ulist.innerHTML = "";
});



