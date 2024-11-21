Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num, 0);
};

const numbers = [1, 2, 3, 4];
console.log(numbers.sum()); // Output: 10
