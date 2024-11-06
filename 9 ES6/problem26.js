//26. একটা ফাংশন তৈরি কর যা একটা অ্যারে নিবে আর অ্যারে না থাকলে ডিফল্ট `[10, 20, 30]` ধরে যোগফল দেখাবে।
const addArray = (arr = [10, 20, 30]) => {
  const sum = arr.reduce((total, num) => total + num, 0);
  console.log("array যোগফল:", sum);
};
addArray();
