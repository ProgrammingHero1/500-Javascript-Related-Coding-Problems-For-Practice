// Problem 1: Check if a string has an even or odd number of characters
function isEvenLength(str) {
  // If the length of the string is divisible by 2, it's even
  return str.length % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenLength("JavaScript")); // Output: Odd
