//39. একটা ফোনবুক অবজেক্টে নাম্বার আর নাম ধরে দেখাস।
const phoneBook = {
  user: "মাহি",
  number: "০১৭",
};
const { user, number: contactNumber } = phoneBook;
console.log("নাম:", user, "নাম্বার:", contactNumber);
