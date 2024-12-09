//22. তোকে ক্যাফের মেনু বানাতে বলল। একটা ফাংশন লিখ যেখানে কফির নাম ইনপুট দিলে কফির দাম জানাবে।
function getCoffeePrice(coffeeName) {
  const menu = {
    espresso: 700,
    latte: 800,
    cappuccino: 850,
    frappuccino: 950,
    mocha: 900,
  };

  const price = menu[coffeeName.toLowerCase()];
  if (price) {
    return `${coffeeName} price: ${price} Taka.`;
  } else {
    return "That coffee is not on the menu.";
  }
}

// Example usage:
const coffee = "latte";
const coffeePrice = getCoffeePrice(coffee);
console.log(coffeePrice);
