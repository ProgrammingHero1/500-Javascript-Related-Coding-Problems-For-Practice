//তুই একটা স্ট্রিং লিখলি, “JavaScript is fun!” এটা উল্টাতে কি আউটপুট আসবে সেটা বের করার জন্য কোড লিখে দেখ।
const string6 = "JavaScript is fun!";
let reverse6 = "";
for (const letter of string6) {
  reverse6 = letter + reverse6;
}
console.log("Problem 6:", reverse6); // Output: "!nuf si tpircSavaJ"
