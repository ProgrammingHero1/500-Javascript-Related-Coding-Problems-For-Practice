// Problem 10: exerciseCounter tracks the number of exercises done
function exerciseCounter() {
  let exerciseCount = 0;
  return function () {
    exerciseCount++; // Increment exercise count
    return exerciseCount;
  };
}

const exercise = exerciseCounter();
console.log(exercise()); // First exercise, exerciseCount = 1
console.log(exercise()); // Second exercise, exerciseCount = 2
console.log(exercise()); // Third exercise, exerciseCount = 3
