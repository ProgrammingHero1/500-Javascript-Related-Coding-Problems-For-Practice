function uploadImage(isNetworkAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNetworkAvailable) {
        resolve("Image uploaded successfully!");
      } else {
        reject("Upload failed due to network issues");
      }
    }, 3000);
  });
}

uploadImage(true)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
