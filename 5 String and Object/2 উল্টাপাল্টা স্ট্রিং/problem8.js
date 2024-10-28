//তোর কাছে একটা স্ট্রিং এর লিস্ট আছে, "moon", "stars", "sun". প্রতিটি শব্দ উল্টে দেখ কি হয়। এজন্য একটা লুপের মাধ্যমে চেষ্টা কর।

const words = ["moon", "stars", "sun"];
const reversedWords = [];
for (const word of words) {
  let reversedWord = "";
  for (const letter of word) {
    reversedWord = letter + reversedWord;
  }
  reversedWords.push(reversedWord);
}
console.log("Problem 8:", reversedWords); // Output: ["noom", "srats", "nus"]
