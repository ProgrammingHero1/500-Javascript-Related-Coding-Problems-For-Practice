// 3. Sum of odd numbers only in an array
function sumOfOddNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}
console.log("Sum of Odd Numbers:", sumOfOddNumbers([5, 15, 8, 7]));
