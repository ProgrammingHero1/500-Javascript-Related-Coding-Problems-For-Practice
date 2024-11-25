function parentFunction() {
  let parentVar = "I'm the parent";
  function childFunction() {
    console.log(parentVar);
  }
  childFunction(); // Output: I'm the parent
}

parentFunction();
