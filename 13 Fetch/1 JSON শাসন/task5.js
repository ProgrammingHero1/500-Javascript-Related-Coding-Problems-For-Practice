const json1 = '{"name": "Tareq", "age": 25}';
const json2 = "{'name': 'Jashim', 'age': 30}";
const json3 = '{"product": "laptop", "price": 50000}';

// বৈধ JSON স্ট্রিং কিনা পরীক্ষা করা
try {
  console.log(JSON.parse(json1)); // বৈধ
} catch {
  console.log("json1 is invalid");
}

try {
  console.log(JSON.parse(json2)); // অবৈধ
} catch {
  console.log("json2 is invalid");
}

try {
  console.log(JSON.parse(json3)); // বৈধ
} catch {
  console.log("json3 is invalid");
}
