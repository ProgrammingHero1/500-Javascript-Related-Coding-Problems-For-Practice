// Problem 6: Using let in a loop and trying to access the loop variable outside
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}
console.log("outside", i); // Error: i is not defined outside the loop because let is block-scoped
