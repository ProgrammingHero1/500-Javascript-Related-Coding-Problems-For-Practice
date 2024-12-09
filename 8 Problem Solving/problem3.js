//3. তুই ঘুড়ি উড়াতে গিয়ে দূরত্ব আর সময় নিয়ে মাপছিলি ঘুড়ির গতি। একটা ফাংশন লিখ যেখানে দূরত্ব আর সময় ইনপুট নিলে ঘুড়ির গতি বের করবে।
function calculateSpeed(distance, time) {
  if (time === 0) {
    return "Time cannot be zero.";
  }
  const speed = distance / time;
  return `The speed of the kite is: ${speed} units/hour.`;
}

const distanceTravelled = 140;
const timeTaken = 2;
const speed = calculateSpeed(distanceTravelled, timeTaken);
console.log(speed);
