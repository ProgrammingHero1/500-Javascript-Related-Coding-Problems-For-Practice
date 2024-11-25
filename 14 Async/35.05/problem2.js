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
