const person = { name: "Alex" };

function introduce(city, profession) {
  console.log(`${this.name} lives in ${city} and works as ${profession}`);
}

introduce.apply(person, ["New York", "Engineer"]);
// Output: Alex lives in New York and works as Engineer
