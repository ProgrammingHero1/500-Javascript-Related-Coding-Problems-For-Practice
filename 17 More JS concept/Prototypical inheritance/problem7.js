function Animal() {
  this.friends = [];
}

function Dog(name) {
  Animal.call(this);
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Charlie");

dog1.friends.push("Cat");
console.log(dog1.friends); // Output: ["Cat"]
console.log(dog2.friends); // Output: []

// Solution: Avoid using objects/arrays on the prototype directly.
