const user = {
  id: 4,
  name: "Asif",
  greet: function () {
    return `Hello, I am ${this.name}`;
  },
};

// JSON ফরম্যাটে রূপান্তর
const userJSON = JSON.stringify(user);
console.log(userJSON);
