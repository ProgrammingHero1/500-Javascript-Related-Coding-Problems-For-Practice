const counter = (function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
})();
counter(); // 1
counter(); // 2
counter(); // 3
