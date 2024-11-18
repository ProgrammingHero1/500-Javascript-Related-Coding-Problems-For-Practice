const user = {
  id: 2,
  name: "Sara",
  role: "Designer",
};

// JSON ফরম্যাটে কনভার্ট করা
const userJSON = JSON.stringify(user);
console.log(userJSON);

//output:  {"id":2,"name":"Sara","role":"Designer"}
