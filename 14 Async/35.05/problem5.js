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
