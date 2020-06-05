function forLoopExample() {
  let sum = 0;
  for (let index = 1000; index >= 17; ) {
    sum = sum + index;
    index = index - 11;
  }

  console.log("Sum is - " + sum);
}

function whileLoopExample() {
  let sum = 0;
  let i = 0;
  while (i < 10) {
    sum = sum + i;
    i = i + 1;
  }

  console.log("Sum is - " + sum);
}

forLoopExample();
whileLoopExample();
