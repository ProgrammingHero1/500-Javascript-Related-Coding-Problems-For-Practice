// 1. Function that takes string, array, or object as parameter and logs it
function greeting(person) {
  console.log(person);
}

const name = "আলিম মামা";
const numbers = [5, 10, 15];
const laptop = { color: "red", size: "large" };

greeting(name); // Output: আলিম মামা
greeting(numbers); // Output: [5, 10, 15]
greeting(laptop); // Output: { color: 'red', size: 'large' }
