const jsonString = `{
    "id": 3,
    "title": "Frontend Development",
    "price": 3500,
    "tags": ["HTML", "CSS", "JavaScript"]
  }`;

// JSON থেকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর
const data = JSON.parse(jsonString);

// "tags" এর প্রথম মান এবং "price" প্রিন্ট করা
console.log(data.tags[0]); // HTML
console.log(data.price); // 3500
