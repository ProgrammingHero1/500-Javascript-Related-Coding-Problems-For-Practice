function authenticateUser(username) {
  return new Promise((resolve, reject) => {
    if (username === "validUser") {
      resolve("User authenticated successfully");
    } else {
      reject("Authentication failed");
    }
  });
}

authenticateUser("validUser")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
