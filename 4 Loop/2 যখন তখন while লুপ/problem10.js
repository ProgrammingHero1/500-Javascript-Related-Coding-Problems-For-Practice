//তোর ছোট ভাইয়ের কাছে 15টা চকোলেট আছে। সে প্রতিদিন 3টা করে খাচ্ছে। একটা while লুপ দিয়ে হিসাব করে দেখ, কয় দিন পর চকোলেট শেষ হবে।

let chocolates = 15;
let days = 0;

while (chocolates > 0) {
  chocolates -= 3;
  days++;
}

console.log("চকোলেট শেষ করতে সময় লাগবে:", days, "দিন");
