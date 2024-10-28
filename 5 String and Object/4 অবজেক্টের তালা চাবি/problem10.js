//তোর বন্ধু একটা store অবজেক্ট তৈরি করেছে, যার মধ্যে name: "Mega Mart", products: 500 আর location: {city: "Dhaka", street: "Banani"} আছে। location এর city বের কর।
const store = {
  name: "Mega Mart",
  products: 500,
  location: { city: "Dhaka", street: "Banani" },
};
console.log(store.location.city);
