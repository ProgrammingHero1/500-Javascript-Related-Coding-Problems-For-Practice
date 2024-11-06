//23. একটা ফাংশন তৈরি কর যা `price` আর `quantity` নিবে। যদি `quantity` না পাই, তাহলে ১ ধরে মোট মূল্য দেখাবে।
const calculateTotal = (price, quantity = 1) =>
  console.log(`মোট মূল্য: ${price * quantity}`);
calculateTotal(50);
