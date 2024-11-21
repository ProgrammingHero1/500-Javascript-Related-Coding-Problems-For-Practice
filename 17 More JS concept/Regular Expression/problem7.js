const text = "Every apple has a juicy taste.";
const words = text.match(/\b\w{5}\b/g); // Match words with exactly 5 characters
console.log(words); // Output: ["Every", "apple", "juicy"]
