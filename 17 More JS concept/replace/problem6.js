let text6 =
  "My phone number is 01712345678. Please call me at 01876543210 too.";
let result6 = text6.replace(/\d{11}/g, "***");
console.log(result6);
// Output: "My phone number is ***. Please call me at *** too."
