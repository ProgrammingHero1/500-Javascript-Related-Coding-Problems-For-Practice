// Problem 1: Create an 'animal' object with 'sound' property. Create 'dog' inheriting from 'animal' and set 'sound' to 'Bark'.
const animal = {
  sound: "Generic Sound",
};
const dog = Object.create(animal);
dog.sound = "Bark";
console.log(dog.sound); // Output: 'Bark'

// Problem 2: Create a 'parent' object with a 'greet' method. Create 'child' inheriting from 'parent' and call 'greet'.
const parent = {
  greet: function () {
    console.log("Hello from parent!");
  },
};
const child = Object.create(parent);
child.greet(); // Output: 'Hello from parent!'

// Problem 3: Create 'vehicle' object with 'type' and 'move' method. Create 'car' inheriting from 'vehicle' and call 'move'.
const vehicle = {
  type: "Generic Vehicle",
  move: function () {
    console.log("Vehicle is moving");
  },
};
const car = Object.create(vehicle);
car.move(); // Output: 'Vehicle is moving'

// Problem 4: Create 'student' object with 'name'. Create 'newStudent' inheriting from 'student' and check 'name'.
const student = {
  name: "Rahim",
};
const newStudent = Object.create(student);
console.log(newStudent.name); // Output: 'Rahim'

// Problem 5: Create 'fruit' with 'type'. Create 'apple' inheriting from 'fruit', set 'type' to 'Apple', and print it.
const fruit = {
  type: "Generic Fruit",
};
const apple = Object.create(fruit);
apple.type = "Apple";
console.log(apple.type); // Output: 'Apple'

// Problem 6: Create 'machine' with 'status'. Create 'fan' inheriting from 'machine', set 'status' to 'on', and check it.
const machine = {
  status: "off",
};
const fan = Object.create(machine);
fan.status = "on";
console.log(fan.status); // Output: 'on'

// Problem 7: Create 'food' with 'taste'. Create 'burger' inheriting from 'food' and print 'taste'.
const food = {
  taste: "delicious",
};
const burger = Object.create(food);
console.log(burger.taste); // Output: 'delicious'

// Problem 8: Create 'person' with 'sayHello' method. Create 'friend' inheriting from 'person' and call 'sayHello'.
const person = {
  sayHello: function () {
    console.log("Hello!");
  },
};
const friend = Object.create(person);
friend.sayHello(); // Output: 'Hello!'

// Problem 9: Create 'gadget' with 'brand'. Create 'phone' inheriting from 'gadget', set 'brand' to 'Samsung', and print it.
const gadget = {
  brand: "Unknown",
};
const phone = Object.create(gadget);
phone.brand = "Samsung";
console.log(phone.brand); // Output: 'Samsung'

// Problem 10: Create 'animal' with 'sound'. Create 'cat' inheriting from 'animal', set 'sound' to 'Meow', and print it.
const anotherAnimal = {
  sound: "Generic Animal Sound",
};
const cat = Object.create(anotherAnimal);
cat.sound = "Meow";
console.log(cat.sound); // Output: 'Meow'
