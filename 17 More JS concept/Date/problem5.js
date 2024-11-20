function calculateDaysDifference(date1, date2) {
  const diffInMs = Math.abs(new Date(date2) - new Date(date1));
  const days = diffInMs / (1000 * 60 * 60 * 24);
  console.log(`${days} দিন`);
}

calculateDaysDifference("2024-01-01", "2024-12-31");
