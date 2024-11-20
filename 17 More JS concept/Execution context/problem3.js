function outer() {
  console.log("Outer function start");
  function inner() {
    console.log("Inner function start");
    console.log("Inner function end");
  }
  inner();
  console.log("Outer function end");
}

outer();

// Execution Context Stack:

// Global Execution Context তৈরি হবে।
// outer() কল হলে নতুন Execution Context তৈরি হবে।
// outer এর ভিতরে inner() কল হলে আরেকটি Execution Context তৈরি হবে।
// inner শেষ হলে Stack থেকে সরবে, এরপর outer।
