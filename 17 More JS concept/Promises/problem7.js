function checkStock(stock) {
  return new Promise((resolve, reject) => {
    if (stock > 10) {
      resolve("Stock is sufficient.");
    } else {
      reject("Stock is insufficient.");
    }
  });
}

checkStock(15)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
