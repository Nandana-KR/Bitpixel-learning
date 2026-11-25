
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

//function Counter() {
//  let count = 0;
//  function increment() {
//    count += 1;
//    return count;
//  }
//  function decrement() {
//    count -= 1;
//    return count;
//  }

//  function reset() {
//    count = 0;
//    return count;
//  }

//  return {
//    add: increment,
//    minus: decrement,
//    reset: reset
//  };
//}

//const operation = Counter();
//console.log(operation.add());
//console.log(operation.add());
//console.log(operation.add());
//console.log(operation.minus());
//console.log(operation.reset());
//console.log(operation.add());


console.log("-- example2:closure--");

//function bankAccount() {
//  let balance = 1000;
//  function deposit(amount) {
//    balance += amount;
//    return balance;
//  }
//  function withdraw(amount) {

//    balance -= amount
//    return {
//      remainingBalance: balance,
//      amountWithdraw: amount
//    };
//  }
//  function getBalance() {
//    return balance;
//  }
//  return {
//    deposit,
//    withdraw,
//    getBalance
//  };
//}
//const result = bankAccount();
//console.log(result.deposit(1000));
//console.log(result.withdraw(500));
//console.log(result.getBalance());

console.log("-- Asyncronus callback--");


setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x")
  y();
}
x(function y() {
  console.log("y")

})
console.log("-- Asyncronus callback--");
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEventListener();

function setIntervalListener() {
  const countElement = document.getElementById("countdown");
  let count = Number(countElement.textContent);
  let intervalId = null;
  function Start() {

    document.getElementById("start").addEventListener("click", function () {
      if (intervalId !== null) return;
      intervalId = setInterval(() => {
        if (count > 0) {
          count--

        } else {
          count = 10
        }
        countElement.textContent = count;
      }, 1000);
      console.log("Interval ID:", intervalId);
    });

  }
  function Stop() {
    document.getElementById("stop").addEventListener("click", function () {
      countElement.textContent = count;
      clearInterval(intervalId);
      intervalId = null;
    })

  }
  function Reset() {
    document.getElementById("reset").addEventListener("click", function () {
      count = 0;
      countElement.textContent = count;

      clearInterval(intervalId);
      intervalId = null;
    });
  }
  Start();
  Stop();
  Reset();
}
setIntervalListener();


console.log("-- callback example 2--");

function displayUser(user) {
  console.log(user.name);
}

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Nandana" });
  }, 1000);
}

getUser(1, displayUser);

console.log("-- callback example 2:modified--");
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Nandana" });
  }, 1000)
}
getUser(1, (user) => {
  console.log(user.id);
  console.log(user.name);
});