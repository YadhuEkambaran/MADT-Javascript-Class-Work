function addNumbers() {
  sum = 0;
  for (let i = 0; i < 100; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log("---- SUM ----- " + addNumbers());
