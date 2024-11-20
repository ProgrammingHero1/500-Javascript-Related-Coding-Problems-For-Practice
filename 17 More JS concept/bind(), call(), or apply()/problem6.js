function calculateArea(length, width) {
  console.log("Area: " + length * width);
}

calculateArea.call(null, 5, 10); // Output: Area: 50
calculateArea.call(null, 8, 12); // Output: Area: 96
