// Problem 1: watch1, watch2, and watch3 are different stopwatches that increment their own counters
function stopWatch() {
  let counter = 0; // This counter is local to each function call, hence each watch will have its own counter.
  return function () {
    counter++; // Increment the counter each time the function is called
    return counter;
  };
}

const watch1 = stopWatch();
const watch2 = stopWatch();
const watch3 = stopWatch();

// Simulate button clicks (calls to the functions)
console.log(watch1()); // watch1 increments to 1
console.log(watch1()); // watch1 increments to 2
console.log(watch2()); // watch2 starts at 1
console.log(watch3()); // watch3 starts at 1
console.log(watch1()); // watch1 increments to 3
