// 10. Sum of even numbers in an array
function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
console.log("Sum of Even Numbers:", sumOfEvenNumbers([2, 4, 5, 7, 8]));
