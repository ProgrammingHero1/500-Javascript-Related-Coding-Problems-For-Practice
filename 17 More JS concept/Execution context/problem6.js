function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

// Execution Context Stack:

// Global Execution Context তৈরি হবে।
// first ফাংশনের Execution Context তৈরি হবে।
// second ফাংশন কল হলে নতুন Execution Context যোগ হবে।
// third ফাংশন কল হলে তার Execution Context যোগ হবে।
