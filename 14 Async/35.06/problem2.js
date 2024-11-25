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
