// Problem 8: Accessing a var-declared variable outside the function
function add(a, b) {
  var current = a + b; // var has function scope
  console.log(current); // current can be accessed here because var is function-scoped
}

add(5, 3); // Output: 8
