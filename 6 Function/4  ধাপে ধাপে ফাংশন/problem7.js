// 7. Function to filter multiples of 3 in an array
function filterMultiplesOfThree(numbers) {
  const multiplesOfThree = numbers.filter((num) => num % 3 === 0);
  return multiplesOfThree;
}
console.log("Multiples of 3:", filterMultiplesOfThree([3, 6, 9, 12])); // Test with an array
