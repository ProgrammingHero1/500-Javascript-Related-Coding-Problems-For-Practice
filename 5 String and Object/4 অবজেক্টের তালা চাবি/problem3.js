//ধর তোর একটা book অবজেক্ট আছে, যার মধ্যে title: "JavaScript Guide", author: "Jahid" এবং publisher: {name: "ABC Publications", year: 2022}। ডট নোটেশন দিয়ে publisher এর নাম বের কর।
const book = {
  title: "JavaScript Guide",
  author: "Jahid",
  publisher: { name: "ABC Publications", year: 2022 },
};
console.log(book.publisher.name);
