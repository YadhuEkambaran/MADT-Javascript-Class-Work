function sumValue(start, end, step) {
  var sum = 0;
  for (let i = start; i >= end; i -= step) {
    sum = sum + i;
  }

  return sum;
}

console.log("SUM IS - " + sumValue(1000, 10, 17));
