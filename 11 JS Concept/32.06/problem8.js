// Problem 8: examCounter tracks exam scores per session
function examCounter() {
  let score = 0;
  return function (points) {
    score += points; // Add points to the score for each exam
    return score;
  };
}

const exam1 = examCounter();
const exam2 = examCounter();
console.log(exam1(50)); // exam1 score = 50
console.log(exam2(40)); // exam2 score = 40
console.log(exam1(10)); // exam1 score = 60
