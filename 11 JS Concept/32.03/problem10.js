// Problem 10: সংখ্যা থাকলে বল “সংখ্যা আছে”, না থাকলে “সংখ্যা নেই”।
function checkNumber(num) {
  if (num) {
    console.log("সংখ্যা আছে");
  } else {
    console.log("সংখ্যা নেই");
  }
}
checkNumber(5); // Test with a number
checkNumber(0); // Test with zero, which is falsy
