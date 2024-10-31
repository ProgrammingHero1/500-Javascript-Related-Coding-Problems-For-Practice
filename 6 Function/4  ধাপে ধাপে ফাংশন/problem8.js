// 8. Function to print the length of each name in an array
function lengthOfEachName(names) {
  for (const name of names) {
    console.log(`Length of ${name}:`, name.length);
  }
}
lengthOfEachName(["Tanvir", "Jim", "Hadi"]); // Testing with an array of names
