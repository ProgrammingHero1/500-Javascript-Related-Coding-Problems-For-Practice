// Problem 9: Double the number if positive, triple if negative
function modifyNumber(n) {
  // Double if positive, triple if negative
  return n >= 0 ? n * 2 : n * 3;
}
console.log(modifyNumber(-5)); // Output: -15
console.log(modifyNumber(10)); // Output: 20
