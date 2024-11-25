const person = {
  name: "Rafiq",
  age: 30,
  showInfo() {
    console.log(this.name);
    console.log(this.age);
  },
};

person.showInfo();

//solution : this অবজেক্ট person কে নির্দেশ করছে।
