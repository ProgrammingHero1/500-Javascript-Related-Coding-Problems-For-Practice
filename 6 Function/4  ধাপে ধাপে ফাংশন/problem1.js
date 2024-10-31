// 1. Array of numbers, calculate the cumulative sum and log each intermediate sum
function cumulativeSum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
    console.log("Intermediate Sum:", sum); // Log intermediate sums
  }
  return sum;
}
cumulativeSum([12, 45, 6, 8, 14]); // Testing the function
