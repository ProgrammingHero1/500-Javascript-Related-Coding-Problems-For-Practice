function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function () {
  console.log(`The ${this.type} is starting.`);
};

function Car(type) {
  Vehicle.call(this, type);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function () {
  console.log(`The ${this.type} is driving.`);
};

const sedan = new Car("Car");
sedan.start(); // Output: The Car is starting.
sedan.drive(); // Output: The Car is driving.
