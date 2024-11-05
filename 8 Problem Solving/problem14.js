//14. তোর কাছে লাল, নীল আর সবুজ রঙের বল আছে। একটা ফাংশন লিখ যেখানে একটা array ইনপুট নিলে প্রতিটি রঙের বলের সংখ্যা দেখাবে।
function countBalls(balls) {
  let red = 0,
    blue = 0,
    green = 0;

  for (let ball of balls) {
    if (ball.toLowerCase() === "লাল") {
      red++;
    } else if (ball.toLowerCase() === "নীল") {
      blue++;
    } else if (ball.toLowerCase() === "সবুজ") {
      green++;
    }
  }

  return `লাল বল: ${red}, নীল বল: ${blue}, সবুজ বল: ${green}`;
}

// উদাহরণ ব্যবহার:
const ballColors = ["লাল", "নীল", "সবুজ", "লাল", "সবুজ", "নীল", "লাল"];
const ballCount = countBalls(ballColors);
console.log(ballCount);
