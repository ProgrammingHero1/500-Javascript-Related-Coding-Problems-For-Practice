// Problem 7: setTimeout() to display a message after 3 seconds
function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("৩ সেকেন্ড হয়ে গেছে!");
    }, 3000);
  });
}
delayedMessage().then(console.log);
