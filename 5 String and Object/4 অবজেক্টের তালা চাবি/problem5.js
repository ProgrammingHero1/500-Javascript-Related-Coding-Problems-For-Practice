//ধর, তুই একটা laptop অবজেক্ট বানালি, যার মধ্যে brand: "Dell", price: 55000, আর config: {processor: "i5", ram: "8GB"}। Object.entries() মেথড ব্যবহার করে কীগুলা ও মানগুলা পেয়ার হিসেবে বের কর।
const laptop = {
  brand: "Dell",
  price: 55000,
  config: { processor: "i5", ram: "8GB" },
};
console.log(Object.entries(laptop));
