const phone = "01812345678";
const phonePattern = /^01[3-9]\d{8}$/; // Match Bangladeshi phone number
console.log(phonePattern.test(phone)); // Output: true
