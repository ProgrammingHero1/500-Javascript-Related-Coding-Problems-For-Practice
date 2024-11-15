// Problem 1: Trying to access parameters outside of the function
function add(a, b) {
  const total = a + b;
  console.log(a, b); // a and b are accessible here
  return total;
}

console.log(a, b); // Error: a and b are not accessible outside the function
add(5, 7); // This will work within the function, but outside it will throw an error
