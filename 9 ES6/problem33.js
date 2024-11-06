//33. একটা ফাংশন তৈরি কর যা সংখ্যাগুলো `spread` করে যোগ করবে। সংখ্যা না থাকলে `[5, 10, 15]` ধরে যোগফল দেখাবে।
const sumAll = (nums = [5, 10, 15]) => {
  const total = nums.reduce((sum, num) => sum + num, 0);
  console.log("সব যোগফল:", total);
};
sumAll();
