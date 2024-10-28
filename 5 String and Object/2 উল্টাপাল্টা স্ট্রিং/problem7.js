//তোর বান্ধবীর নাম "Ayesha". এবার প্রোগ্রাম লিখে দেখ, নামটা উল্টা করে কেমন দেখা যায়।
const string7 = "Ayesha";
let reverse7 = "";
for (const letter of string7) {
  reverse7 = letter + reverse7;
}
console.log("Problem 7:", reverse7); // Output: "ahseyA"
