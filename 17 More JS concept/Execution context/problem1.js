var a = 10;

function test() {
  var b = 20;
  console.log(a + b);
}

test();

// Creation Phase:

// Global Execution Context (GEC) তৈরি হবে।
// a ভ্যারিয়েবল undefined হবে।
// test ফাংশন মেমোরিতে পুরো ফাংশন ডিক্লারেশন হিসাবে থাকবে।

// Execution Phase:

// a এর মান 10 হবে।
// test() কল হলে নতুন Execution Context তৈরি হবে।
// b ভ্যারিয়েবল undefined হবে এবং পরে 20 সেট হবে।
// a + b = 30 প্রিন্ট হবে।
