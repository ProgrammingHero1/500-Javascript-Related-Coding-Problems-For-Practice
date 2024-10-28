//তুই এক্সপেরিমেন্ট করছিলি এবং লিখছিলি, “Coding rocks!” এবার স্ট্রিংটা উল্টাতে কি মজার কিছু আসে কিনা সেটার জন্য একটা কোড লিখ।

const string9 = "Coding rocks!";
let reverse9 = "";
for (const letter of string9) {
  reverse9 = letter + reverse9;
}
console.log("Problem 9:", reverse9); // Output: "!skcor gnidoC"
