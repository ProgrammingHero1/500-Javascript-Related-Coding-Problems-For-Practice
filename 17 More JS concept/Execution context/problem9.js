const person = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  },
};

person.greet();

// Explanation:
// Arrow function এ this গ্লোবাল স্কোপ নির্দেশ করে, কারণ এটি Lexical Context থেকে this নেয়।
