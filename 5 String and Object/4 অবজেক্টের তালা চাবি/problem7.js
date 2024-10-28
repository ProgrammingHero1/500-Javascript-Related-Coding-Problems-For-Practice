//ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "Sony", price: 3000, আর color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আরেকটা নতুন প্রোপার্টি যোগ করতে চেষ্টা কর, দেখ কাজ করে কিনা।
const headphone = {
  brand: "Sony",
  price: 3000,
  color: "red",
};
Object.freeze(headphone);
headphone.warranty = "1 year";
console.log(headphone);
