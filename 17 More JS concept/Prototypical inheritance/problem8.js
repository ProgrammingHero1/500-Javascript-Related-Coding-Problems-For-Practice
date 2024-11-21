function MyFunc() {}
MyFunc.prototype.greet = function () {
  console.log("Hello from prototype!");
};

const obj = new MyFunc();
obj.greet(); // Output: Hello from prototype.
