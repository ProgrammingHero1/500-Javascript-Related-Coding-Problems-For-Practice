//17. তোর বন্ধু একটা ৫০০ পৃষ্ঠার বই পড়ছে। একটা ফাংশন লিখ যেখানে প্রতিদিনের পৃষ্ঠা ইনপুট দিলে মাসের মধ্যে বইটা শেষ করতে কতদিন লাগবে সেটার হিসাব করবে।
function pagesPerDay(totalPages, daysInMonth) {
  if (daysInMonth === 0) {
    return "দিনের সংখ্যা শূন্য হতে পারে না।";
  }
  const pages = Math.ceil(totalPages / daysInMonth);
  return `তুমি প্রতিদিন ${pages} পৃষ্ঠা পড়লে মাসের মধ্যে বই শেষ করতে পারবে।`;
}

// উদাহরণ ব্যবহার:
const totalPages = 500;
const daysInMonth = 30;
const dailyPages = pagesPerDay(totalPages, daysInMonth);
console.log(dailyPages);
