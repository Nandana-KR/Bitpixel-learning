function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }

  return x / y;

}
//string
function toUpper(text) {
  return text.toUpperCase();
}
function toLower(text) {
  return text.toLowerCase();
}

function stringLength(text) {
  return text.length;
}

function capitalize(name) {
  if (name === "") {
    return "";
  }
  return name[0].toUpperCase() + name.slice(1)
}


module.exports = { add, subtract, multiply, divide, toUpper, capitalize, toLower, stringLength };
