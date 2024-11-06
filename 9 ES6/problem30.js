//30. একটা ফাংশন তৈরি কর যেখানে প্রিয় সব ফুলের নাম নিবি। ফুল না থাকলে `Unknown Flower` ধরবি।
const favoriteFlowers = (...flowers) =>
  console.log("তোর প্রিয় ফুল:", flowers.length ? flowers : "Unknown Flower");
favoriteFlowers();
