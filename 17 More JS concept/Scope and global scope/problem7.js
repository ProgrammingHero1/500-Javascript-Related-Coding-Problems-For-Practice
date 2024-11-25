function outerFunction() {
  let outerVar = "Outer";

  function middleFunction() {
    let middleVar = "Middle";

    function innerFunction() {
      let innerVar = "Inner";
      console.log(outerVar); // Output: Outer
      console.log(middleVar); // Output: Middle
      console.log(innerVar); // Output: Inner
    }

    innerFunction();
  }

  middleFunction();
}

outerFunction();
