//7. তুই ক্যালোরি হিসাব করতে চাস, যেখানে প্রোটিন, ফ্যাট আর কার্বোহাইড্রেটের মান নিলে ক্যালোরি বের করবে। একটা ফাংশন লিখ যা এই মানগুলো ইনপুট নেবে।
function calculateCalories(protein, fat, carbs) {
  const proteinCalories = protein * 4;
  const fatCalories = fat * 9;
  const carbCalories = carbs * 4;
  const totalCalories = proteinCalories + fatCalories + carbCalories;
  return `মোট ক্যালোরি: ${totalCalories} ক্যালরি`;
}

// উদাহরণ ব্যবহার:
const proteinAmount = 50; // গ্রামে
const fatAmount = 20; // গ্রামে
const carbAmount = 60; // গ্রামে
const calories = calculateCalories(proteinAmount, fatAmount, carbAmount);
console.log(calories);
