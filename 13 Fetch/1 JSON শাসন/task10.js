const invalidJSON1 = '{"name": "Farhan", "age":}';
const invalidJSON2 = '{"product": "phone", "price": "30,000"}';
const validJSON = '{"country": "BD", "city": "Dhaka"}';

// বৈধ JSON চেক করা
try {
  console.log(JSON.parse(invalidJSON1));
} catch {
  console.log("invalidJSON1 is invalid");
}

try {
  console.log(JSON.parse(invalidJSON2));
} catch {
  console.log("invalidJSON2 is invalid");
}

try {
  console.log(JSON.parse(validJSON));
} catch {
  console.log("validJSON is invalid");
}
