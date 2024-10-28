//ধরে নে তুই পরীক্ষার খাতা চেক করছিলি। একটা স্ট্রিং এর মধ্যে নাম “Rakib” আছে। একবার উল্টে তো দেখে, যদি স্ট্রিংটা উল্টাই তাহলে নামটা কি হবে?
const string3 = "Rakib";
let reverse3 = "";
for (const letter of string3) {
  reverse3 = letter + reverse3;
}
console.log("Problem 3:", reverse3); // Output: "bikaR"
