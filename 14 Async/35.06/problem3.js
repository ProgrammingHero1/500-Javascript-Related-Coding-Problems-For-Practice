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
