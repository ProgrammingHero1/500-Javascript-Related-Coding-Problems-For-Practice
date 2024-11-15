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
