"use strict";

function test() {
  console.log(this);
}

test();

//Solution: use strict মোডে, ফাংশন কলের সময় যদি this ডিফাইন করা না থাকে, তাহলে এটা undefined হবে।
