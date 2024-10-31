// Problem 3: Double the number if true, triple if false
function doubleOrTriple(num, doDouble) {
  // Check boolean condition and either double or triple the number
  return doDouble ? num * 2 : num * 3;
}
console.log(doubleOrTriple(5, true)); // Output: 10
console.log(doubleOrTriple(5, false)); // Output: 15
