function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Bird(name, age) {
  Animal.call(this, name, age); // Inherit properties
}

Bird.prototype = Object.create(Animal.prototype); // Inherit methods
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  console.log(`${this.name} is flying!`);
};

const sparrow = new Bird("Sparrow", 2);
sparrow.speak(); // Output: Sparrow makes a sound.
sparrow.fly(); // Output: Sparrow is flying!
