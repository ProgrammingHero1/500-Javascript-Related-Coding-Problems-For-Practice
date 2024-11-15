// Problem 1: Create a Vehicle class and inherit Car class from it, adding model.
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  displayInfo() {
    console.log(`This vehicle is a ${this.brand}, made in ${this.year}.`);
  }
}

class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }
  displayCarInfo() {
    console.log(
      `This car is a ${this.brand} ${this.model}, made in ${this.year}.`
    );
  }
}

const car1 = new Car("Toyota", 2022, "Corolla");
car1.displayCarInfo(); // Problem 1 solution

// Problem 2: Add startEngine() in Vehicle and inherit in Bike class.
Vehicle.prototype.startEngine = function () {
  console.log(`${this.brand} engine starting...`);
};

class Bike extends Vehicle {}

const bike1 = new Bike("Honda", 2021);
bike1.startEngine(); // Problem 2 solution

// Problem 3: Create ElectricCar subclass with a battery status method.
class ElectricCar extends Vehicle {
  checkBatteryStatus() {
    console.log(`${this.brand} battery is fully charged.`);
  }
}

const electricCar = new ElectricCar("Tesla", 2023);
electricCar.checkBatteryStatus(); // Problem 3 solution

// Problem 4: Create FuelTank class and inherit in Car to check fuel level.
class FuelTank {
  constructor(fuelLevel) {
    this.fuelLevel = fuelLevel;
  }
  checkFuelLevel() {
    console.log(`Current fuel level: ${this.fuelLevel} liters.`);
  }
}

class FuelEfficientCar extends FuelTank {
  constructor(brand, year, model, fuelLevel) {
    super(fuelLevel);
    this.brand = brand;
    this.year = year;
    this.model = model;
  }
}

const fuelEfficientCar = new FuelEfficientCar("Toyota", 2021, "Prius", 50);
fuelEfficientCar.checkFuelLevel(); // Problem 4 solution

// Problem 5: Create Truck class inheriting Vehicle with capacity.
class Truck extends Vehicle {
  constructor(brand, year, capacity) {
    super(brand, year);
    this.capacity = capacity;
  }
  showCapacity() {
    console.log(`This truck can carry up to ${this.capacity} tons.`);
  }
}

const truck1 = new Truck("Volvo", 2020, 10);
truck1.showCapacity(); // Problem 5 solution

// Problem 6: Customize info method in Bike
