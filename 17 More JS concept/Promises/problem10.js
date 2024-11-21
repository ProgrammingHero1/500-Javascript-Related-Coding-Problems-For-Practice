function connectServer(retry = false) {
  return new Promise((resolve, reject) => {
    if (retry) {
      resolve("Connected to server");
    } else {
      reject("Connection failed");
    }
  });
}

connectServer()
  .catch((error) => {
    console.log(error);
    return connectServer(true);
  })
  .then((message) => console.log(message));
