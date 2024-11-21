function Person(name) {
  this.name = name;
}

function Teacher(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
// Forgot to reset constructor
const mathTeacher = new Teacher("Alice", "Math");

console.log(mathTeacher.constructor === Teacher); // Output: false
console.log(mathTeacher.constructor === Person); // Output: true

//fix:
//Teacher.prototype.constructor = Teacher;
