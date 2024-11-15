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

// Problem 2: Print "চা বানাতে আসবি!" message every 1 second, stop after 5 times
function sendTeaMessage() {
  let count = 0;
  let intervalId = setInterval(() => {
    console.log("চা বানাতে আসবি!"); // Print the message
    count++;
    if (count === 5) {
      clearInterval(intervalId); // Stop after printing 5 times
    }
  }, 1000); // 1-second interval
}
sendTeaMessage();

// Problem 3: Print "তুই ভালো আছিস?" message every 3 seconds, stop after 10 seconds
function askHowAreYou() {
  let intervalId = setInterval(() => {
    console.log("তুই ভালো আছিস?"); // Print the message every 3 seconds
  }, 3000); // 3-second interval

  setTimeout(() => {
    clearInterval(intervalId); // Stop after 10 seconds
  }, 10000); // 10-second timer
}
askHowAreYou();
