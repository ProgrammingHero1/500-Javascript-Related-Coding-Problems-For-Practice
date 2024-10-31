// Problem 7: যেকোনো দুই সংখ্যার যোগফল, বিয়োগফল, গুণফল, ভাগফল রিটার্ন করবে
function calculateOperations(num1, num2) {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const division = num1 / num2;
  return { sum, difference, product, division };
}
console.log("Problem 7:", calculateOperations(10, 2));
