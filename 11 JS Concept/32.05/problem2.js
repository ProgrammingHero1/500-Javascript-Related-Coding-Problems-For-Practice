// Problem 2: Accessing a variable declared within the function outside of it
function add(a, b) {
  const total = a + b;
  console.log(a, b); // a and b are accessible here
  return total;
}

console.log(total); // Error: total is defined within the function, not accessible outside
add(5, 7); // This will work inside the function, but outside, total can't be accessed
