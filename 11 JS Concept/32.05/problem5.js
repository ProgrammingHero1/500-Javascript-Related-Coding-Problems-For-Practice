// Problem 5: Using var in a loop and accessing the loop variable outside
for (var i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}
console.log("outside", i); // Outputs 5 because var is function-scoped and i is accessible outside the loop
