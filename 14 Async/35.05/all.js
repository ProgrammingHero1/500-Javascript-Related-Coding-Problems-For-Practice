// Problem 1: Promise to boil water and make tea
function boilWater() {
  return new Promise((resolve, reject) => {
    let isBoiled = true; // Change this to false to test rejection
    if (isBoiled) {
      resolve("চা বানাতে পারিস");
    } else {
      reject("পানি ফুটানো হয়নি");
    }
  });
}
boilWater().then(console.log).catch(console.error);

// Problem 2: Guessing a number using a promise
function guessNumber(number) {
  return new Promise((resolve, reject) => {
    if (number < 5) {
      resolve("সংখ্যাটি ৫-এর ছোট, অনুমান সঠিক!");
    } else {
      reject("সংখ্যাটি ৫-এর বড়, অনুমান ভুল!");
    }
  });
}
guessNumber(3).then(console.log).catch(console.error);

// Problem 3: Fetching a joke from an API
async function fetchJoke() {
  try {
    let response = await fetch("https://api.example.com/joke");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("ডাটা আনতে পারিনি, error:", error);
  }
}
fetchJoke();

// Problem 4: 100-taka food promise
function foodPromise() {
  return new Promise((resolve, reject) => {
    let friendBuysFood = true; // Change to false to test rejection
    if (friendBuysFood) {
      resolve("তোর বন্ধু খাবার কিনে দিয়েছে");
    } else {
      reject("তোর বন্ধু খাবার দেয়নি");
    }
  });
}
foodPromise().then(console.log).catch(console.error);

// Problem 5: Generating a random number and checking it
function checkRandomNumber() {
  return new Promise((resolve, reject) => {
    let randomNum = Math.random();
    console.log("Generated number:", randomNum);
    if (randomNum < 0.5) {
      resolve("সংখ্যাটি ০.৫ এর নিচে");
    } else {
      reject("সংখ্যাটি ০.৫ এর উপরে");
    }
  });
}
checkRandomNumber().then(console.log).catch(console.error);

// Problem 6: Async function to fetch user data
async function fetchUserData() {
  try {
    let response = await fetch("https://api.example.com/user");
    let data = await response.json();
    console.log("Data Loaded Successfully:", data);
  } catch {
    console.error("Error Loading Data");
  }
}
fetchUserData();

// Problem 7: setTimeout() to display a message after 3 seconds
function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("৩ সেকেন্ড হয়ে গেছে!");
    }, 3000);
  });
}
delayedMessage().then(console.log);

// Problem 8: Fetch weather data using async/await
async function fetchWeatherData() {
  try {
    let response = await fetch("https://api.example.com/weather");
    let data = await response.json();
    console.log("Weather Data Loaded:", data);
  } catch {
    console.error("Failed to Load Weather Data");
  }
}
fetchWeatherData();

// Problem 9: Random task completion from a list
function randomTaskCompletion(tasks) {
  return new Promise((resolve, reject) => {
    let taskCompleted = Math.random() < 0.5; // Simulating success or failure
    if (taskCompleted) {
      resolve("কাজটা সফলভাবে শেষ হয়েছে");
    } else {
      reject("কাজটা ব্যর্থ হয়েছে");
    }
  });
}
randomTaskCompletion(["Task 1", "Task 2", "Task 3"])
  .then(console.log)
  .catch(console.error);

// Problem 10: Promise for going to a movie
function moviePromise() {
  return new Promise((resolve, reject) => {
    let canGoToMovie = true; // Change to false to test rejection
    if (canGoToMovie) {
      resolve("মুভি দেখব!");
    } else {
      reject("না যেতে পারলাম না!");
    }
  });
}
moviePromise().then(console.log).catch(console.error);
