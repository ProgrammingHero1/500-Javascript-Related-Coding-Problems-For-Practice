Object.prototype.pollutedMethod = function () {
  console.log("Prototype polluted!");
};

const obj = {};
obj.pollutedMethod(); // Output: Prototype polluted!

// Avoid modifying Object.prototype as it affects all objects globally.
