// Problem 7: scoreCounter function tracks game scores individually
function scoreCounter() {
  let score = 0;
  return function (points) {
    score += points; // Add points to the score
    return score;
  };
}

const game1 = scoreCounter();
const game2 = scoreCounter();
console.log(game1(10)); // game1 score = 10
console.log(game1(5)); // game1 score = 15
console.log(game2(20)); // game2 score = 20
console.log(game2(5)); // game2 score = 25
