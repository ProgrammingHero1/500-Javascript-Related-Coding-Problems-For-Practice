//9. তোর শখের লিস্ট বানাচ্ছিস। একটা ফাংশন লিখ যেখানে একটা array ইনপুট নিলে সেই array তে কয়টা শখ আছে সেটার সংখ্যা দেখাবে।
function countHobbies(hobbies) {
  return `The number of your hobbies: ${hobbies.length}`;
}

// Example usage:
const myHobbies = ["Reading", "Singing", "Book collecting", "Drawing"];
const hobbyCount = countHobbies(myHobbies);
console.log(hobbyCount);
