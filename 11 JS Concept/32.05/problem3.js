// Problem 3: Accessing a variable declared inside an if-else block outside of it
function add(a, b) {
  const total = a + b;
  if (b > 5) {
    const sum = 25 + b + b; // sum is accessible only inside the if block
  } else {
    const sum = 5 + a + b; // sum is accessible only inside the else block
    console.log(sum); // This will work inside the else block
  }
  console.log(sum); // Error: sum is not accessible outside if-else block
  return total;
}

add(5, 7); // Works inside the else block, but gives error when trying to access sum outside the block
