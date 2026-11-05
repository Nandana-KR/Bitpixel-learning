const { add, subtract, multiply, divide, toUpper, capitalize, toLower, stringLength } = require("./utils");

test("add adds two numbers", function () {
  expect(add(2, 3)).toBe(5);
});

test("subtract subtracts two numbers", function () {
  expect(subtract(5, 3)).toBe(2);
});
test("subtract gives a negative number when the second is bigger", function () {
  expect(subtract(3, 5)).toBe(-2);
});
test("multiply multiplies two numbers", function () {
  expect(multiply(2, 3)).toBe(6);
});

test("divide divides two numbers", function () {
  expect(divide(6, 3)).toBe(2);
});
test("divide gives a decimal when it does not divide evenly", function () {
  expect(divide(3, 6)).toBe(0.5);
});

test("divide throws when dividing by zero", function () {
  expect(function () {
    divide(3, 0);
  }).toThrow();
});


//string

test("toUpper maker every letter capital", function () {
  expect(toUpper("hello")).toBe("HELLO");
});
test("toLower maker every letter lower case", function () {
  expect(toLower("HELLO")).toBe("hello");
});
test("stringLength gives length of word", function () {
  expect(stringLength("hello")).toBe(5);
});
test("capitalize makes first letter capital", function () {
  expect(capitalize("nandana")).toBe("Nandana");

});

test("for an empty string capitalize return empty", function () {
  expect(capitalize("")).toBe("");
});