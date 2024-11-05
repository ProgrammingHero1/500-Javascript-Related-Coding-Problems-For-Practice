//3. তুই ঘুড়ি উড়াতে গিয়ে দূরত্ব আর সময় নিয়ে মাপছিলি ঘুড়ির গতি। একটা ফাংশন লিখ যেখানে দূরত্ব আর সময় ইনপুট নিলে ঘুড়ির গতি বের করবে।
function calculateSpeed(distance, time) {
  if (time === 0) {
    return "সময় শূন্য হতে পারে না।";
  }
  const speed = distance / time;
  return `ঘুড়ির গতি: ${speed} ইউনিট/ঘণ্টা`;
}

// উদাহরণ ব্যবহার:
const distanceTravelled = 120; // ইউনিটে
const timeTaken = 2; // ঘণ্টায়
const speed = calculateSpeed(distanceTravelled, timeTaken);
console.log(speed);
