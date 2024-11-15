// Problem 1: Create a `Car` class with brand and model properties
class Car {
  // Constructor to initialize brand, model, and color
  constructor(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color || "unknown"; // Set color if provided, else 'unknown'
    this.price = price || 0; // Set price if provided, else 0
    Car.carCount++; // Increment car count on each creation
  }

  // Static property to count total cars created
  static carCount = 0;

  // Static method to get total cars created
  static countCars() {
    return Car.carCount;
  }

  // Problem 3: Static method to count total cars created so far
  static countByBrand(brand) {
    return Car.allCars.filter((car) => car.brand === brand).length;
  }

  // Problem 4: Method to calculate discounted price
  calculateDiscountedPrice(discountPercent) {
    return this.price - (this.price * discountPercent) / 100;
  }

  // Problem 5: Method to display car information
  displayInfo() {
    console.log(
      `গাড়ির ব্র্যান্ড: ${this.brand}, মডেল: ${this.model}, রঙ: ${this.color}`
    );
  }

  // Problem 6: CarService class with a serviceCar method
  static serviceCar(car) {
    console.log(`${car.brand} ${car.model} এর সার্ভিস শেষ`);
  }

  // Problem 7: Method to check if car is an old model
  oldModel() {
    if (parseInt(this.model) < 2000) {
      console.log(`${this.brand} ${this.model} হলো পুরাতন মডেল`);
    } else {
      console.log(`${this.brand} ${this.model} হলো নতুন মডেল`);
    }
  }

  // Problem 8: Method to set car price
  setPrice(price) {
    this.price = price;
  }

  // Problem 9: Method to check if car is luxury based on price
  isLuxury() {
    if (this.price > 700000) {
      console.log(`${this.brand} ${this.model} হলো লাক্সারি গাড়ি`);
    } else {
      console.log(`${this.brand} ${this.model} হলো সাধারণ গাড়ি`);
    }
  }
}

// Array to store all car objects for counting purposes
Car.allCars = [];

// Create car instances to demonstrate the solutions
const car1 = new Car("Toyota", "1998", "নীল", 500000); // Example Car
Car.allCars.push(car1); // Add to list of all cars

const car2 = new Car("Honda", "2010", "লাল", 800000);
Car.allCars.push(car2);

const car3 = new Car("Toyota", "2022", "কালো", 750000);
Car.allCars.push(car3);

// Problem 1: Show brand and model of a car
car1.displayInfo();

// Problem 2: Add color to car and show
const carWithColor = new Car("Honda", "Civic", "লাল");
carWithColor.displayInfo();

// Problem 3: Count the total number of cars created
console.log(`মোট ${Car.countCars()} টা গাড়ি তৈরি হয়েছে`);

// Problem 4: Calculate and show the discounted price
console.log(`Discounted price: ${car1.calculateDiscountedPrice(10)} টাকা`);

// Problem 5: Display car info with color included
car1.displayInfo();

// Problem 6: Service a car
Car.serviceCar(car2);

// Problem 7: Check if car is an old model
car1.oldModel();

// Problem 8: Set and show car price
car1.setPrice(500000);
console.log(`${car1.brand} ${car1.model} এর দাম: ${car1.price} টাকা`);

// Problem 9: Check if car is luxury or not
car2.isLuxury();

// Problem 10: Count cars by brand
console.log(`Toyota ব্র্যান্ডের গাড়ি সংখ্যা: ${Car.countByBrand("Toyota")}`);
