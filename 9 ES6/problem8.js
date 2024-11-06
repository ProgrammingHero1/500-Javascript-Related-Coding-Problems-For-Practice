//8. একটা ফাংশন লিখ যা একটা অ্যারের সকল সংখ্যার যোগফল দেখাবে। অ্যারে না দিলে `[1, 2, 3]` দিয়ে যোগফল হিসাব করবে।
const sumArray = (numbers = [1, 2, 3]) => {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  console.log("array যোগফল:", total);
};
sumArray();
