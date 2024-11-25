function outer() {
  this.value = 42;

  const inner = () => {
    console.log(this.value);
  };

  inner();
}

const obj = new outer();

//Solution: Arrow function inner এর this তার বাইরের outer ফাংশনের this ধরে।
// new outer() কল করলে this obj অবজেক্টকে নির্দেশ করে।
