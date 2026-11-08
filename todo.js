let result = [];
function addTask(task) {
  result.push(task);
}
function listTask() {
  if (result.length === 0) {
    console.log("No item found");
  } else {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}
function removeTask(task) {
  let found = false;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === task) {
      result.splice(i, 1);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("Not found");
  }
}
addTask("Buy milk");
addTask("Study JS");
addTask("Meeting at 3");
listTask();
console.log("----list----");
removeTask("Buy milk");
console.log("-----remove-----");
listTask();
console.log("----removelist----");
console.log("-------------");
removeTask("Pizza");