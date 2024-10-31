// Problem 4: তোর বয়স রিটার্ন করবে, জন্ম সাল ইনপুট হিসেবে নিতে হবে
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
console.log("Problem 4:", calculateAge(2000));
