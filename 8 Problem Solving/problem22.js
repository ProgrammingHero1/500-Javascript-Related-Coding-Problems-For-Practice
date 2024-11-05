//22. তোকে ক্যাফের মেনু বানাতে বলল। একটা ফাংশন লিখ যেখানে কফির নাম ইনপুট দিলে কফির দাম জানাবে।
function getCoffeePrice(coffeeName) {
  const menu = {
    এস্প্রেসো: 700,
    লাটে: 800,
    কাপুচিনো: 850,
    ফ্রাপ্পুচিনো: 950,
    মোকা: 900,
  };

  const price = menu[coffeeName.toLowerCase()];
  if (price) {
    return `${coffeeName} এর দাম: ${price} টাকা।`;
  } else {
    return "মেনুতে সেই কফি নেই।";
  }
}

// উদাহরণ ব্যবহার:
const coffee = "লাটে";
const coffeePrice = getCoffeePrice(coffee);
console.log(coffeePrice);
