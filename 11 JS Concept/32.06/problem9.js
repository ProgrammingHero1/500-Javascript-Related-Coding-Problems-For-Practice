// Problem 9: pencilCounter tracks the number of pencils bought
function pencilCounter() {
  let pencilCount = 0;
  return function () {
    pencilCount++; // Increment pencil count with each call
    return pencilCount;
  };
}

const pencils = pencilCounter();
console.log(pencils()); // First pencil, pencilCount = 1
console.log(pencils()); // Second pencil, pencilCount = 2
console.log(pencils()); // Third pencil, pencilCount = 3
