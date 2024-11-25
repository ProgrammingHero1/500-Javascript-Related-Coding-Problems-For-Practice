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
