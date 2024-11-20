const greet = (function () {
  return function () {
    console.log("Hello from inside!");
  };
})();
greet();
