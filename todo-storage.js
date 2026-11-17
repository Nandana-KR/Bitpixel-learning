const saved = localStorage.getItem("Task");
console.log(saved);
const add = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const ulist = document.querySelector("#todo-list");
const clear = document.getElementById("clear-btn");
const errorMsg = document.getElementById("error-msg");
//let result = JSON.parse(saved) || [];
let result;

try {
  result = JSON.parse(saved) || [];
} catch (error) {
  result = [];
  console.warn("Saved tasks were broken, starting with an empty list");
}

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
  try {
    const text = input.value.trim();
    if (text === "") {
      throw new Error("Please enter a task");
    }
    if (result.includes(text)) {
      throw new Error("This task is already in the list");
    }
    showTask(addList(text));
    localStorage.setItem("Task", JSON.stringify(result));
    input.value = "";
    errorMsg.textContent = "";

  } catch (error) {
    errorMsg.textContent = error.message;
  }
});


clear.addEventListener("click", function () {
  localStorage.removeItem("Task");
  result = [];
  ulist.innerHTML = "";
});



