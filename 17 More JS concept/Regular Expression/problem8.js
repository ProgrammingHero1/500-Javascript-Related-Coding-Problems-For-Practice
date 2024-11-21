const date = "20/11/2024";
const datePattern = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/; // Match DD/MM/YYYY format
console.log(datePattern.test(date)); // Output: true
