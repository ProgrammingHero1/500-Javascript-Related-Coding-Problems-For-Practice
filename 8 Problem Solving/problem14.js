//14. তোর কাছে লাল, নীল আর সবুজ রঙের বল আছে। একটা ফাংশন লিখ যেখানে একটা array ইনপুট নিলে প্রতিটি রঙের বলের সংখ্যা দেখাবে।
function countBalls(balls) {
  let red = 0,
    blue = 0,
    green = 0;

  for (let ball of balls) {
    if (ball.toLowerCase() === "red") {
      red++;
    } else if (ball.toLowerCase() === "blue") {
      blue++;
    } else if (ball.toLowerCase() === "green") {
      green++;
    }
  }

  return `Red balls: ${red}, Blue balls: ${blue}, Green balls: ${green}`;
}

// Example usage:
const ballColors = ["red", "blue", "green", "red", "green", "blue", "red"];
const ballCount = countBalls(ballColors);
console.log(ballCount);
