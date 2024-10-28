//এবার তুই একটা সংখ্যা টাইপের স্ট্রিং বানালি, “12345”! এটাকে রিভার্স করার জন্য কি কোড লিখবি, সেটা করে দেখ।

const string4 = "12345";
let reverse4 = "";
for (const letter of string4) {
  reverse4 = letter + reverse4;
}
console.log("Problem 4:", reverse4); // Output: "54321"
