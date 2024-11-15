// Random Bg-Color
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  console.log("Button clicked! Background color changed to:", randomColor);
});

// For Specific Bg-Color
// const button = document.getElementById("myButton");
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#FFD700";
//   console.log("Button clicked! Background color changed.");
// });
