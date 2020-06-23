var a = 0;

console.log(2 + "2", " ", 2 + "-2");

for (; keepGoing(); ) {
  console.log("debug msg A " + a++);
  tiger();
}

function keepGoing() {
  if (a >= 10) {
    return false;
  }

  tiger();
  return true;
}

function tiger() {
  a += 2;
  if (a == 5) {
    a += 2;
  }
}
