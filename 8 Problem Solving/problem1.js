//1. তোর এক ছোট ভাই স্কুলের জন্য নামতা শিখতে চাচ্ছে। একটা ফাংশন লিখ, যেখানে একটা সংখ্যা ইনপুট দিলে সেই সংখ্যার নামতা প্রিন্ট করে দেখাস। যেমন, ৫ দিলে ৫ এর নামতা প্রিন্ট করবে।
function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// উদাহরণ ব্যবহার:
printMultiplicationTable(5);
