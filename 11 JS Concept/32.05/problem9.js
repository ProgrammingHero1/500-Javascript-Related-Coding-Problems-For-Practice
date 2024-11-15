// Problem 9: Accessing let-declared variable outside the function
function add(a, b) {
  let current = a + b; // let has block scope
  console.log(current); // current is accessible here
}

console.log(current); // Error: current is not accessible outside the function
add(5, 3); // Works inside the function, but outside it gives error
