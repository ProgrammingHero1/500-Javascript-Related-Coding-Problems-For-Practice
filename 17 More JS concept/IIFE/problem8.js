const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log("Counter reset!");
    },
  };
})();
counter.increment(); // 1
counter.increment(); // 2
counter.reset(); // Counter reset!
counter.increment(); // 1
