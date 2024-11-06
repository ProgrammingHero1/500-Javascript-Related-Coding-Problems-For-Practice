//36. প্রিয় খাবারগুলোর একটা তালিকা নেয়ার জন্য একটা ফাংশন তৈরি কর। খাবার না থাকলে `No Food Found` দেখাস।
const favoriteFoodList = (foods = []) =>
  console.log("তোর খাবার:", foods.length ? foods : "No Food Found");
favoriteFoodList();
