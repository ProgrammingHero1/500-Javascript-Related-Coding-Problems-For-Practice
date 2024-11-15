// Problem 2: তুই তোর জন্ম সাল, যেমন ধর ২০০১, একটা ভ্যারিয়েবলে রাখ। তারপর আরেকটা ভ্যারিয়েবলে তোর বর্তমান বয়স বের করে রাখ, এবং কনসোল-এ দেখ।
let birthYear = 2001;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("Current age:", age);
