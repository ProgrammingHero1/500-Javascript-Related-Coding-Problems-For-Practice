const car = { brand: "Tesla" };

function showBrand() {
  console.log("The car is a " + this.brand);
}

showBrand.call(car); // Output: The car is a Tesla
