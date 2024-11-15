// Problem 10: তুই ১৫টা চকোলেট নিয়ে আসলি, তোর এক ভাই ৫টা খেয়ে ফেলল আর আরেক ভাই ৩টা খেয়ে ফেলল। এখন কনসোল-এ দেখ, তোর কাছে কতো চকোলেট বাকি আছে।
let chocolates = 15;
let chocolatesEatenByBrother1 = 5;
let chocolatesEatenByBrother2 = 3;
let remainingChocolates =
  chocolates - (chocolatesEatenByBrother1 + chocolatesEatenByBrother2);
console.log("Remaining chocolates:", remainingChocolates);
