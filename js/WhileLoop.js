/* 
Author - Yadhukrishnan Ekambaran
Student ID - C0765769

This function alerts the sum of 1 - 10 */
function add() {
  let i = 1;
  let sum = 0;
  while (i <= 10) {
    sum = sum + i;
    i = i + 1;
  }

  console.log("Sum is - " + sum);
  alert("Sum is - " + sum);
}
