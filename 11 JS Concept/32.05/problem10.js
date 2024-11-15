// Problem 10: Difference between var and let
function compareScopes() {
  for (var i = 0; i < 3; i++) {
    console.log("Var loop:", i); // Outputs 0, 1, 2
  }
  console.log("Outside var loop:", i); // 3 because var has function scope

  for (let j = 0; j < 3; j++) {
    console.log("Let loop:", j); // Outputs 0, 1, 2
  }
  console.log("Outside let loop:", j); // Error: j is not defined outside the loop because let has block scope
}

compareScopes();
