//10. তোকে স্কুলের সময়সূচি বানাতে বলল। একটা ফাংশন লিখ যেখানে ঘণ্টা ইনপুট দিলে দিনের সেই সময়সূচি দেখাবে।
function showSchedule(hour) {
  if (hour >= 6 && hour < 12) {
    return "Morning: Classes start.";
  } else if (hour >= 12 && hour < 17) {
    return "Afternoon: Break and lunch.";
  } else if (hour >= 17 && hour < 19) {
    return "Evening: Practice and homework.";
  } else if (hour >= 19 && hour < 22) {
    return "Night: Dinner and rest.";
  } else {
    return "Off-hours: School is closed.";
  }
}

// Example usage:
const currentHour = 10;
const schedule = showSchedule(currentHour);
console.log(schedule);
