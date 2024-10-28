//তোকে একটা বাক্য দিলাম, “I love coding”! এই বাক্যটা উল্টে দিলে প্রিন্ট হবে “gnidoc evol I”. প্রোগ্রাম লিখে প্রমাণ কর।
const string5 = "I love coding";
let reverse5 = "";
for (const letter of string5) {
  reverse5 = letter + reverse5;
}
console.log("Problem 5:", reverse5); // Output: "gnidoc evol I"
