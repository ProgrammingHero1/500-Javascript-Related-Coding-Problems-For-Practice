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
