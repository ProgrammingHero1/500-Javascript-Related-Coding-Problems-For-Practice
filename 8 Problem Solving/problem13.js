//13. তুই মিল্ক শেক বানাতে চাস, যেখানে দুধ, চিনি আর আইসক্রিম এর ক্যালোরি হিসাব করবে। একটা ফাংশন লিখ যেখানে এই উপাদানগুলো ইনপুট নিলে ক্যালোরি বের করবে।
function milkshakeCalories(milk, sugar, iceCream) {
  // ক্যালোরি গুনফল
  const milkCalories = milk.protein * 4 + milk.fat * 9 + milk.carbs * 4;
  const sugarCalories = sugar.carbs * 4;
  const iceCreamCalories =
    iceCream.protein * 4 + iceCream.fat * 9 + iceCream.carbs * 4;

  const totalCalories = milkCalories + sugarCalories + iceCreamCalories;
  return `মিল্ক শেকের মোট ক্যালোরি: ${totalCalories} ক্যালরি`;
}

// উদাহরণ ব্যবহার:
const milk = { protein: 8, fat: 8, carbs: 12 }; // এক লিটার দুধ
const sugar = { carbs: 20 }; // এক চামচ চিনি
const iceCream = { protein: 10, fat: 15, carbs: 25 }; // এক গ্লাস আইসক্রিম

const totalCal = milkshakeCalories(milk, sugar, iceCream);
console.log(totalCal);
