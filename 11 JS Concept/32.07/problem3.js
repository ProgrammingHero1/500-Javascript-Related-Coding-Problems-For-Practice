// 3. Function calling another function inside it
function callAnotherFunction() {
  function greetingHandler() {
    console.log("Hello");
  }
  greetingHandler(); // Calling greetingHandler inside callAnotherFunction
}

callAnotherFunction();
