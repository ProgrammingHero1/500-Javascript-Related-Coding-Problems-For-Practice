//28. একাধিক বইয়ের নাম নেয়ার জন্য একটা ফাংশন তৈরি কর। বই না থাকলে `Unknown Book` ধরে দেখাস।
const books = (...titles) =>
  console.log("তোর বই:", titles.length ? titles : "Unknown Book");
books();
