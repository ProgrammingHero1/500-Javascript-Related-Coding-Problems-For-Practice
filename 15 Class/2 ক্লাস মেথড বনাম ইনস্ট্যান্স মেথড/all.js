// Problem 1: Define a Car class with brand and model, and a displayInfo instance method
class Car {
  constructor(brand, model, color = "Unknown", rentalPrice = 0, year = 2020) {
    this.brand = brand;
    this.model = model;
    this.color = color; // Property for color
    this.rentalPrice = rentalPrice; // Property for rental price
    this.year = year; // Property for manufacturing year
    this.owner = null; // Property to track car owner
    Car.incrementCarCount(); // Update car count each time a new car is created
  }

  // Problem 2: Class method to return the number of wheels
  static numberOfWheels() {
    return 4;
  }

  // Problem 3: Instance method to display car info
  displayInfo() {
    console.log(`This car is a ${this.color} ${this.brand} ${this.model}`);
  }

  // Problem 4: Instance method to change car color
  changeColor(newColor) {
    this.color = newColor;
  }

  // Problem 5: Method to calculate rental price based on days
  calculateRentalPrice(days) {
    return days * this.rentalPrice;
  }

  // Problem 6: Class property to track total cars
  static totalCars = 0;

  // Class method to increment total car count
  static incrementCarCount() {
    Car.totalCars++;
  }

  // Problem 7: Method to check if the car is vintage
  isVintage() {
    return this.year < 2000 ? "vintage car" : "not a vintage car";
  }

  // Problem 8: Method to change car model
  changeModel(newModel) {
    this.model = newModel;
  }

  // Problem 9: Fuel capacity method
  calculateFuelNeeded(distance) {
    const fuelConsumptionPerKm = 0.2; // Liters per km
    return distance * fuelConsumptionPerKm;
  }

  // Problem 10: Static method to compare two cars' model years
  static compareCars(car1, car2) {
    return car1.year > car2.year
      ? `${car1.model} is newer`
      : `${car2.model} is newer`;
  }

  // Problem 11: Change owner method
  changeOwner(newOwner) {
    this.owner = newOwner;
  }
}

// Problem 1: Creating a Car instance and displaying info
const car1 = new Car("Honda", "Civic");
car1.displayInfo();

// Problem 2: Displaying the number of wheels
console.log(Car.numberOfWheels());

// Problem 3: Creating a Car instance with color and changing color
const car2 = new Car("Toyota", "Corolla", "Red");
car2.displayInfo();
car2.changeColor("Blue");
car2.displayInfo();

// Problem 4: Setting rental price and calculating rental for days
const car3 = new Car("BMW", "X5", "Black", 200);
console.log(car3.calculateRentalPrice(7)); // 7 days rental

// Problem 5: Displaying total cars created so far
console.log(`Total cars: ${Car.totalCars}`);

// Problem 6: Checking if a car is vintage
const oldCar = new Car("Ford", "Mustang", "Green", 0, 1995);
console.log(oldCar.isVintage());

// Problem 7: Changing model of a car
car1.changeModel("Accord");
car1.displayInfo();

// Problem 8: Calculating fuel needed for distance
console.log(`Fuel needed for 100 km: ${car2.calculateFuelNeeded(100)} liters`);

// Problem 9: Comparing two car models by year
const newerCar = new Car("Tesla", "Model S", "White", 0, 2023);
console.log(Car.compareCars(oldCar, newerCar));

// Problem 10: Changing owner and displaying new owner
car1.changeOwner("Rahim");
console.log(`Owner of the car is now: ${car1.owner}`);
car1.changeOwner("Karim");
console.log(`New owner of the car is now: ${car1.owner}`);
