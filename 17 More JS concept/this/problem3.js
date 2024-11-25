function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.brand);
console.log(myCar.model);

// Solution: this নতুন অবজেক্ট myCar কে নির্দেশ করছে।
