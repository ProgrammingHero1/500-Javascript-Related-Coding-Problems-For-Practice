function outerFunction() {
  let msg = "Accessible";
  function innerFunction() {
    console.log(msg); // Output: Accessible
  }
  innerFunction();
}

outerFunction();
