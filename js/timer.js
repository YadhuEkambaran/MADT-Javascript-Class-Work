let myArray = ["Yadhu", "Aswathy", "Ayaan"];

myArray.myMethod = function (arg) {
  if (arguments.length > 0) {
    console.log(this[arg]);
  } else {
    console.log(this);
  }
};

setTimeout(function () {
  myArray.myMethod();
}, 1000);

setTimeout(function () {
  myArray.myMethod(2);
}, 1000);
