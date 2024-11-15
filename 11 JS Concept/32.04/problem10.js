// Problem 10: Function to check if first and second parameters are equal using double equal (==)
function checkEquality(val1, val2) {
  if (val1 == val2) {
    console.log(
      "Problem 10: " +
        val1 +
        " and " +
        val2 +
        " are equal using double equal (==)"
    );
  } else {
    console.log(
      "Problem 10: " +
        val1 +
        " and " +
        val2 +
        " are not equal using double equal (==)"
    );
  }
}

// Testing function with different inputs
checkEquality(5, "5");
checkEquality(true, 1);
checkEquality(0, false);
