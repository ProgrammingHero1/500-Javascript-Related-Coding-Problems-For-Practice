const scores = [45, 50, 42, 39, 55];
const allPassed = scores.every((score) => score > 40);
console.log(allPassed);
// Output: false (৩৯ স্কোর আছে, যা ৪০-এর নিচে, তাই false রিটার্ন করবে)
