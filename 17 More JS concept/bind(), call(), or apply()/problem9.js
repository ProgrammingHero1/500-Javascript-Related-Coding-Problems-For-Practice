const robot = { model: "T-800" };

function sayModel(phrase) {
  console.log(`${phrase} ${this.model}`);
}

sayModel.call(robot, "I am model"); // Output: I am model T-800
sayModel.apply(robot, ["The robot's model is"]);
// Output: The robot's model is T-800
