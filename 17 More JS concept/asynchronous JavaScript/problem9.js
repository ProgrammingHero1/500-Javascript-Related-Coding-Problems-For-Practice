function randomLog(message) {
  const delay = Math.floor(Math.random() * 5000) + 1000; // 1-5 seconds
  setTimeout(() => {
    console.log(message);
  }, delay);
}

randomLog("I will appear randomly!");
