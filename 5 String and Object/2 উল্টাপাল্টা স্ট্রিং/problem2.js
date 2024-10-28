//তুই ১০টা লেটার দিয়ে একটা স্ট্রিং বানালি, “javascript”! এবার এই স্ট্রিংটা রিভার্স করলে কি আসে, সেটার জন্য কোড লিখ।
const string2 = "javascript";
let reverse2 = "";
for (const letter of string2) {
  reverse2 = letter + reverse2;
}
console.log("Problem 2:", reverse2); // Output: "tpircsavaj"
