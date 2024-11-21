function Device() {}

Device.prototype.turnOn = function () {
  console.log("Device is now on.");
};

function Mobile() {
  Device.call(this);
}

Mobile.prototype = Object.create(Device.prototype);
Mobile.prototype.constructor = Mobile;

function Smartphone() {
  Mobile.call(this);
}

Smartphone.prototype = Object.create(Mobile.prototype);
Smartphone.prototype.constructor = Smartphone;

const myPhone = new Smartphone();
myPhone.turnOn(); // Output: Device is now on.
// Prototype chain: Smartphone -> Mobile -> Device -> Object
