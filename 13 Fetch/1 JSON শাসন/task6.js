const student = {
  name: "Tania",
  age: 22,
  subjects: ["Math", "Physics", "Chemistry"],
  isGraduate: false,
};

// JSON ফরম্যাটে রূপান্তর
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// JSON থেকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর
const studentObj = JSON.parse(studentJSON);

// "subjects" প্রপার্টির সব মান প্রিন্ট করা
console.log(studentObj.subjects);
