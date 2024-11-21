function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}.`);
};

function Student(name) {
  Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function () {
  console.log(`Hello, I am a student named ${this.name}.`);
};

const john = new Student("John");
john.greet(); // Output: Hello, I am a student named John.
