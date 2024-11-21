const email = "test.email@gmail.com";
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email format
console.log(emailPattern.test(email)); // Output: true
