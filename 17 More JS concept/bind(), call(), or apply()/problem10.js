function printNames(...names) {
  console.log("Names:", names.join(", "));
}

printNames.apply(null, [["Alice", "Bob", "Charlie"]]);
// Output: Names: Alice, Bob, Charlie
