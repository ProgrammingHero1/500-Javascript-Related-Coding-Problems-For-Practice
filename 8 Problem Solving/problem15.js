//15. তোকে প্রোডাক্টের জন্য ডিসকাউন্ট হিসাব করতে বলল। একটা ফাংশন লিখ যেখানে প্রোডাক্টের দাম ইনপুট নিলে ১৫% ডিসকাউন্টের পর দাম দেখাবে।
function calculateDiscountedPrice(price) {
  const discount = price * 0.15;
  const discountedPrice = price - discount;
  return `ডিসকাউন্টের পর প্রোডাক্টের দাম: ${discountedPrice} টাকা`;
}

// উদাহরণ ব্যবহার:
const originalPrice = 200;
const finalPrice = calculateDiscountedPrice(originalPrice);
console.log(finalPrice);
