//11. তোকে প্রাইম নাম্বার চেক করতে বলল। একটা ফাংশন লিখ যেখানে একটি সংখ্যা ইনপুট নিলে সেটা প্রাইম কি না বলে দিবে।

function isPrime(number) {
  if (number <= 1) {
    return `${number} প্রাইম নাম্বার নয়।`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} প্রাইম নাম্বার নয়।`;
    }
  }
  return `${number} প্রাইম নাম্বার।`;
}

// উদাহরণ ব্যবহার:
const num = 11;
const primeCheck = isPrime(num);
console.log(primeCheck);
