//তুই একটা smartwatch অবজেক্ট তৈরি কর যেখানে brand: "Fitbit", color: "black", price: 5000 থাকবে। delete কিওয়ার্ড ব্যবহার করে color প্রোপার্টি ডিলিট করে দেখ।
const smartwatch = {
  brand: "Fitbit",
  color: "black",
  price: 5000,
};
delete smartwatch.color;
console.log(smartwatch);
