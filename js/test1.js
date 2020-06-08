function forLoopExample() {
  let sum = 0;
  for (let index = 1000; index >= 17; ) {
    sum = sum + index;
    index = index - 11;
  }

  console.log("Sum is - " + sum);
}

function whileLoopExample(start, end, step) {
  let sum = 0;
  let i = start;
  while (i < end) {
    sum = sum + i;
    i = i + step;
  }

  console.log("Sum is - " + sum);
}

forLoopExample();
whileLoopExample(0, 10, 1);
