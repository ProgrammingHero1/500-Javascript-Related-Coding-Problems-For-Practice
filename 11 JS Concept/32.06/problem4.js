// Problem 4: counter function tracks individual counters for each instance
function counter() {
  let count = 0;
  return function () {
    count++; // Increment the counter
    return count;
  };
}

const count1 = counter();
const count2 = counter();
console.log(count1()); // count1 starts at 1
console.log(count1()); // count1 increments to 2
console.log(count2()); // count2 starts at 1
console.log(count2()); // count2 increments to 2
