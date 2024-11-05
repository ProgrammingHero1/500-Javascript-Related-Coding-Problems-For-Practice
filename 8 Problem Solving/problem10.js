//10. তোকে স্কুলের সময়সূচি বানাতে বলল। একটা ফাংশন লিখ যেখানে ঘণ্টা ইনপুট দিলে দিনের সেই সময়সূচি দেখাবে।
function showSchedule(hour) {
  if (hour >= 6 && hour < 12) {
    return "সকাল: ক্লাস শুরু।";
  } else if (hour >= 12 && hour < 17) {
    return "দুপুর: বিরতি এবং লাঞ্চ।";
  } else if (hour >= 17 && hour < 19) {
    return "সন্ধ্যা: অনুশীলন এবং হোমওয়ার্ক।";
  } else if (hour >= 19 && hour < 22) {
    return "রাত: ডিনার এবং বিশ্রাম।";
  } else {
    return "বিকেল: স্কুল বন্ধ।";
  }
}

// উদাহরণ ব্যবহার:
const currentHour = 10;
const schedule = showSchedule(currentHour);
console.log(schedule);
