function delayedLog(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedLog("Hello after 3 seconds", 3000);
