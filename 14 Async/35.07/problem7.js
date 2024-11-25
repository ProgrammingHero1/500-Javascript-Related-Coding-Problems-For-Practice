// Problem 7: Repeating a message and stopping it
let intervalId = setInterval(() => {
  console.log("তুই কি করছিস?");
}, 2000); // Prints every 2 seconds

setTimeout(() => {
  clearInterval(intervalId); // Stops printing after 6 seconds
}, 6000);
