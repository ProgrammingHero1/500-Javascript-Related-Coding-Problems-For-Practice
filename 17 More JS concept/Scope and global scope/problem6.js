let color = "Blue";

function changeColor() {
  let color = "Red"; // This is a separate local variable.
}

changeColor();
console.log(color); // Output: Blue
