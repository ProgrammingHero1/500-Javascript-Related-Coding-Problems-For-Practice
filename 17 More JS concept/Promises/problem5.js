async function performTask(isTaskDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTaskDone) {
        resolve("Task completed!");
      } else {
        reject("Task failed");
      }
    }, 1000);
  });
}

performTask(true)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
