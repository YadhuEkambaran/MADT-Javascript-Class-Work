/* 
Author - Yadhukrishnan Ekambaran
Student ID - C0765769

This function returns the sum of all the values of i that loops through the for loop.
Here the step count is decremented by 50 */

let start = 1000;
let end = 10;
let step = 50;

function sum() {
  let sumValue = 0;
  for (let i = start; i > end; i = i - step) {
    sumValue = sumValue + i;
  }

  return sumValue;
}

console.log("Sum of the number is - " + sum());

function onClickOfResult() {
  document.getElementById("answer_container").innerText = "Sum is = " + sum();
}
