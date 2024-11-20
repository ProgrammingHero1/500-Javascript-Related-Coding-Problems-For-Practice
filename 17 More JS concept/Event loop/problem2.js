let count = 0;
function printMessage() {
  if (count < 5) {
    console.log("Processing...");
    count++;
    setTimeout(printMessage, 1000);
  }
}
printMessage();
