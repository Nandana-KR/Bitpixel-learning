console.log("--Hoisting---");

//getName();
//console.log(x);
//console.log(getName);
//var x = 7
//function getName() {
//  console.log("Javascript");
//}
//console.log("------");
//getName();
//console.log(x);
//console.log(getName);


console.log("--function:Hoisting---");
//var x = 1;
//a();
//b();
//console.log(x);

//function a() {
//  var x = 10;
//  console.log(x);
//}
//function b() {
//  var x = 10;
//  console.log(x);
//}


console.log("--Lexical Environment & scope chain---");
//function a() {
//  var b = 10;
//  c();
//  function c() {
//    console.log(b)

//  }
//}
//a();

//console.log("--TDZ---");
//let a = 10;
//console.log(a);
//var b = 100;
//console.log(b);

console.log("--block scope & shadowing--");

//var a = 1;
//{
//  let a = 10;
//  console.log(a, "inside block");
//}
//console.log(a, "outside block");


console.log("--illegal shadowing--");
//let z = 1;
//{
//  var z = 10;
//  console.log(z, "inside block");
//}
//console.log(z, "outside block");

console.log("--shadowing in function scope--");
//let i = 1;
//function x() {
//  var i = 10;
//  console.log(i, "inside function");
//}
//console.log(x(), "outside function");



console.log("--closure--");
//function a() {
//  var x = 10;
//  function b() {
//    console.log(x);

//  }
//  return b;
//}
//console.log("-----------");
//var z = a();
//console.log(z);
//z();


console.log("-- counter closure--");


//function counter() {
//  let count = 0;
//  function increment() {
//    count = count + 1;
//    return count;

//  }
//  return increment;
//}

//const count1 = counter();
//const count2 = counter();
//console.log(count1());
//console.log(count2());
//console.log(count1());
//console.log(count2());
//console.log(count1());


console.log("-- counter with increment, decrement, reset --");

function Counter() {
  let count = 0;
  function increment() {
    count += 1;
    return count;
  }
  function decrement() {
    count -= 1;
    return count;
  }

  function reset() {
    count = 0;
    return count;
  }

  return {
    add: increment,
    minus: decrement,
    reset: reset
  };
}

const operation = Counter();
console.log(operation.add());
console.log(operation.add());
console.log(operation.add());
console.log(operation.minus());
console.log(operation.reset());
console.log(operation.add());