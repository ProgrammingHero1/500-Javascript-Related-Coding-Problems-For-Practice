// 5. Function to check if the name is "Dhaka" and return a custom message
function checkCity(name) {
  if (name === "Dhaka") {
    return "ঢাকা আমার প্রিয় শহর";
  } else {
    return "এটা ঢাকা না";
  }
}
console.log(checkCity("Dhaka")); // Testing with "Dhaka"
console.log(checkCity("Chittagong")); // Testing with another name
