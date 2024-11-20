function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy5 = multiply.bind(null, 5);
console.log(multiplyBy5(3, 4)); // Output: 60
