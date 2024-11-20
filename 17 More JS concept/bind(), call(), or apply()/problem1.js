const person = {
  name: "Tina",
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

const boundGreet = person.greet.bind(person);
boundGreet(); // Output: Hello, I am Tina
