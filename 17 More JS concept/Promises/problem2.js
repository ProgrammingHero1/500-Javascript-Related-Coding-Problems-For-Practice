function fetchAPI(isError) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isError) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchAPI(false)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
