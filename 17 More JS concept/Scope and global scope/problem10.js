function checkScope() {
  if (true) {
    var x = 10; // Function scoped
  }
  console.log(x); // Output: 10
}

checkScope();

function checkScopeFixed() {
  if (true) {
    let x = 10; // Block scoped
    console.log(x); // Output: 10
  }
  // console.log(x); // Error: x is not defined
}

checkScopeFixed();
