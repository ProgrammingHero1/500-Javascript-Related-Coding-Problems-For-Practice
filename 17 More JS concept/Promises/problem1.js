function deliverFood(isAvailable) {
  return new Promise((resolve, reject) => {
    if (isAvailable) {
      resolve("Food delivered successfully!");
    } else {
      reject("Food is not available.");
    }
  });
}

deliverFood(true)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
