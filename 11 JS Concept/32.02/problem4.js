// Problem 4: Function with conditional return
function returnIfPositive(a, b) {
  if (a < 0 || b < 0) {
    return; // No return value if either number is negative
  }
  return a + b;
}
console.log(returnIfPositive(5, -3));
