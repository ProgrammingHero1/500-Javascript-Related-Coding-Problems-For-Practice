//21. তোর ছোট ভাই প্রতিদিন লাফ দিলে কত মাসে লম্বা হবে সেটা বের করতে চাস। একটা ফাংশন লিখ যেখানে দৈনিক লাফের পরিমাণ ইনপুট দিলে কয়েক মাস পরে কতটা লম্বা হবে সেটার হিসাব করবে।
function calculateJump(jumpsPerDay, months, jumpsPerMonth) {
  const totalJumps = jumpsPerDay * 30 * months; // Jumps per day * 30 days * months
  return `You will make a total of ${totalJumps} jumps in ${months} months.`;
}

// Example usage:
const dailyJumps = 10;
const numberOfMonths = 6;
const jumpsPerMonth = dailyJumps * 30; // Average jumps per month
const jumpResult = calculateJump(dailyJumps, numberOfMonths, jumpsPerMonth);
console.log(jumpResult);
