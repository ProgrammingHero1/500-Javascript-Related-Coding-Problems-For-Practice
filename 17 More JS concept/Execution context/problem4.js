function outer() {
  var x = 5;
  function inner() {
    var y = 10;
    console.log(x + y);
  }
  inner();
}

outer();

// Lexical Environment:

// outer ফাংশনের Lexical Environment এ x = 5 থাকবে।
// inner ফাংশন তার Parent Lexical Environment থেকে x অ্যাক্সেস করতে পারে।
