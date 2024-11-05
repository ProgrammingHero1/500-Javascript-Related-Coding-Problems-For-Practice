//21. তোর ছোট ভাই প্রতিদিন লাফ দিলে কত মাসে লম্বা হবে সেটা বের করতে চাস। একটা ফাংশন লিখ যেখানে দৈনিক লাফের পরিমাণ ইনপুট দিলে কয়েক মাস পরে কতটা লম্বা হবে সেটার হিসাব করবে।
function calculateJump(jumpsPerDay, months, jumpsPerMonth) {
  const totalJumps = jumpsPerDay * 30 * months; // প্রতিদিনের লাফ * ৩০ দিন * মাস
  return `তুমি ${months} মাসে মোট ${totalJumps} লাফ ফেলবে।`;
}

// উদাহরণ ব্যবহার:
const dailyJumps = 10;
const numberOfMonths = 6;
const jumpsPerMonth = dailyJumps * 30; // মাসে গড়ে লাফ
const jumpResult = calculateJump(dailyJumps, numberOfMonths, jumpsPerMonth);
console.log(jumpResult);
