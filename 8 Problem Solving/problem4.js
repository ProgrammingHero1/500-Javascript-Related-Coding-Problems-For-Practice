//4. তোর জন্ম সাল আর বর্তমান সাল জানা আছে। একটা ফাংশন লিখ যেখানে এই দুইটা ইনপুট নিলে তোর বর্তমান বয়স বের করবে।
function calculateAge(currentYear, birthYear) {
  const age = currentYear - birthYear;
  return `তোর বয়স: ${age} বছর`;
}

// উদাহরণ ব্যবহার:
const currentYear = 2024;
const birthYear = 2000;
const age = calculateAge(currentYear, birthYear);
console.log(age);
