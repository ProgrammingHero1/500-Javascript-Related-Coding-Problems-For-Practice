const text = "My phone number is 01712345678 and zip code is 1234.";
const numbers = text.match(/\d+/g); // Match all digit sequences
console.log(numbers); // Output: ["01712345678", "1234"]
