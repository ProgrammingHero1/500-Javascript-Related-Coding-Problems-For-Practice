// Problem 1: Print numbers from 1, every 2 seconds, stop at 5
function printNumbers() {
  let count = 1;
  let intervalId = setInterval(() => {
    console.log(count); // Print the current number
    if (count === 5) {
      clearInterval(intervalId); // Stop printing when number reaches 5
    }
    count++;
  }, 2000); // 2-second interval
}
printNumbers();
