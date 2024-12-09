//11. তোকে প্রাইম নাম্বার চেক করতে বলল। একটা ফাংশন লিখ যেখানে একটি সংখ্যা ইনপুট নিলে সেটা প্রাইম কি না বলে দিবে।

function isPrime(number) {
  if (number <= 1) {
    return `${number} is not a prime number.`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} is not a prime number.`;
    }
  }
  return `${number} is a prime number.`;
}

// Example usage:
const num = 11;
const primeCheck = isPrime(num);
console.log(primeCheck);
