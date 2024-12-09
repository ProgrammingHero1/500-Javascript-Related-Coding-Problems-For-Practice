//17. তোর বন্ধু একটা ৫০০ পৃষ্ঠার বই পড়ছে। একটা ফাংশন লিখ যেখানে প্রতিদিনের পৃষ্ঠা ইনপুট দিলে মাসের মধ্যে বইটা শেষ করতে কতদিন লাগবে সেটার হিসাব করবে।
function pagesPerDay(totalPages, daysInMonth) {
  if (daysInMonth === 0) {
    return "The number of days cannot be zero.";
  }
  const pages = Math.ceil(totalPages / daysInMonth);
  return `If you read ${pages} pages per day, you can finish the book in a month.`;
}

// Example usage:
const totalPages = 500;
const daysInMonth = 30;
const dailyPages = pagesPerDay(totalPages, daysInMonth);
console.log(dailyPages);
