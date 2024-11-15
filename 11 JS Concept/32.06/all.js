// Problem 1: watch1, watch2, and watch3 are different stopwatches that increment their own counters
function stopWatch() {
  let counter = 0; // This counter is local to each function call, hence each watch will have its own counter.
  return function () {
    counter++; // Increment the counter each time the function is called
    return counter;
  };
}

const watch1 = stopWatch();
const watch2 = stopWatch();
const watch3 = stopWatch();

// Simulate button clicks (calls to the functions)
console.log(watch1()); // watch1 increments to 1
console.log(watch1()); // watch1 increments to 2
console.log(watch2()); // watch2 starts at 1
console.log(watch3()); // watch3 starts at 1
console.log(watch1()); // watch1 increments to 3

// Problem 2: shopCounter function simulates shopping, incrementing the total price.
function shopCounter() {
  let totalPrice = 0;
  return function (price) {
    totalPrice += price; // Add price to the total on each call
    return totalPrice;
  };
}

const shopping = shopCounter();
console.log(shopping(10)); // First item, totalPrice = 10
console.log(shopping(15)); // Second item, totalPrice = 25
console.log(shopping(20)); // Third item, totalPrice = 45

// Problem 3: foodTracker function tracks food quantity per meal.
function foodTracker() {
  let mealCount = 0;
  return function (food) {
    mealCount += food; // Add food amount to the total
    return mealCount;
  };
}

const meals = foodTracker();
console.log(meals(2)); // First meal, total = 2
console.log(meals(5)); // Second meal, total = 7
console.log(meals(3)); // Third meal, total = 10

// Problem 4: counter function tracks individual counters for each instance
function counter() {
  let count = 0;
  return function () {
    count++; // Increment the counter
    return count;
  };
}

const count1 = counter();
const count2 = counter();
console.log(count1()); // count1 starts at 1
console.log(count1()); // count1 increments to 2
console.log(count2()); // count2 starts at 1
console.log(count2()); // count2 increments to 2

// Problem 5: clickCounter function increases click count per button.
function clickCounter() {
  let clickCount = 0;
  return function () {
    clickCount++; // Increment click count on each click
    return clickCount;
  };
}

const clickButton = clickCounter();
console.log(clickButton()); // First click, clickCount = 1
console.log(clickButton()); // Second click, clickCount = 2
console.log(clickButton()); // Third click, clickCount = 3

// Problem 6: taskTracker function tracks tasks done per session.
function taskTracker() {
  let taskCount = 0;
  return function () {
    taskCount++; // Increase task count with each call
    return taskCount;
  };
}

const tasks = taskTracker();
console.log(tasks()); // First task, taskCount = 1
console.log(tasks()); // Second task, taskCount = 2
console.log(tasks()); // Third task, taskCount = 3

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

// Problem 9: pencilCounter tracks the number of pencils bought
function pencilCounter() {
  let pencilCount = 0;
  return function () {
    pencilCount++; // Increment pencil count with each call
    return pencilCount;
  };
}

const pencils = pencilCounter();
console.log(pencils()); // First pencil, pencilCount = 1
console.log(pencils()); // Second pencil, pencilCount = 2
console.log(pencils()); // Third pencil, pencilCount = 3

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
