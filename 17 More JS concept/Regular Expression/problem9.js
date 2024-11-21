const text = "This   is    a   test.";
const result = text.replace(/\s+/g, " "); // Replace multiple spaces with a single space
console.log(result); // Output: "This is a test."
