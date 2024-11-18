const data = {
  userId: 7,
  action: "login",
  timestamp: 1690001234567,
};

// JSON ফরম্যাটে রূপান্তর করা
const dataJSON = JSON.stringify(data);
console.log(dataJSON);

// JSON স্ট্রিং এর টাইপ দেখা
console.log(typeof dataJSON);
