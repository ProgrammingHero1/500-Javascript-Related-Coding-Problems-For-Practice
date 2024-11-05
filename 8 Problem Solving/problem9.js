//9. তোর শখের লিস্ট বানাচ্ছিস। একটা ফাংশন লিখ যেখানে একটা array ইনপুট নিলে সেই array তে কয়টা শখ আছে সেটার সংখ্যা দেখাবে।
function countHobbies(hobbies) {
  return `তোর শখের সংখ্যা: ${hobbies.length}`;
}

// উদাহরণ ব্যবহার:
const myHobbies = ["পাঠ করা", "গান গাওয়া", "বই পড়া", "চিত্র আঁকা"];
const hobbyCount = countHobbies(myHobbies);
console.log(hobbyCount);
