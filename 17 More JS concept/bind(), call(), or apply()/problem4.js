function sum(a, b) {
  return a + b;
}

console.log(sum.apply(null, [5, 10])); // Output: 15
console.log(sum.apply(null, [15, 20])); // Output: 35
console.log(sum.apply(null, [25, 30])); // Output: 55
