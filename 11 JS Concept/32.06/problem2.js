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
