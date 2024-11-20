const person = {
  firstName: "John",
  lastName: "Doe",
};

function getFullName() {
  console.log("Full Name: " + this.firstName + " " + this.lastName);
}

const boundFullName = getFullName.bind(person);
boundFullName(); // Output: Full Name: John Doe
