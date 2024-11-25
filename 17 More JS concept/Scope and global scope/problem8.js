let name = "John";

function updateName() {
  let name = "Doe"; // Local variable
  console.log(name); // Output: Doe
}

updateName();
console.log(name); // Output: John
