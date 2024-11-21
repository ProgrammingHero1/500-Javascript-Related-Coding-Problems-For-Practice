function Shape() {}

Shape.prototype.area = function () {
  console.log("Calculating area...");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
