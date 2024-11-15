// 2. Function that takes another function as parameter and calls it
function greetingWithFunction(greatingHandler) {
  console.log(greatingHandler());
}

function greatingHandler() {
  return "Hello";
}

greetingWithFunction(greatingHandler);
