// Problem 7: Accessing variable declared in an if block inside the function
function checkScope(b) {
  if (b > 5) {
    const sum = 25 + b + b;
    console.log(sum); // sum is accessible here
  }
  console.log(sum); // Error: sum is not accessible outside the if block
}

checkScope(7); // Works inside the if block, but gives error when trying to access sum outside
