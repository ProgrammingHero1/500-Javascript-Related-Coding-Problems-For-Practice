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
