const jsonString = `{
    "id": 101,
    "title": "Learn JavaScript",
    "price": 499
  }`;

// JSON স্ট্রিং থেকে জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট করা
const jsonObj = JSON.parse(jsonString);

// "title" প্রপার্টির মান দেখা
console.log(jsonObj.title);
