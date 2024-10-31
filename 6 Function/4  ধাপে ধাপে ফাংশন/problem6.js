// 6. Function to check if a number is divisible by 10
function checkDivisibility(number) {
  if (number % 10 === 0) {
    return "বড় সংখ্যা";
  } else {
    return "ছোট সংখ্যা";
  }
}
console.log(checkDivisibility(100)); // Testing with 100
console.log(checkDivisibility(35)); // Testing with 35
