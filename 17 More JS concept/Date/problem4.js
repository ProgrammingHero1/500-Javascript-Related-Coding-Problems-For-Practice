function getWeekday(dateString) {
  const days = [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
  ];
  const date = new Date(dateString);
  console.log(days[date.getDay()]);
}

getWeekday("2024-11-20");
