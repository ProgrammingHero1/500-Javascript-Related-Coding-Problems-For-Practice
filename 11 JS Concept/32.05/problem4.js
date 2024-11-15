// Problem 4: Accessing a var-declared variable outside the block
function add(a, b) {
  const total = a + b;
  if (b > 5) {
    const sum = 25 + b + b;
  } else {
    var current = 5 + a + b; // var makes current accessible outside the if-else block
  }
  console.log(current); // current can be accessed here because var has function scope
  return total;
}

add(5, 3); // Output: 13 because current is accessible outside the block due to var
