//19. বর্ষাকালে তুই প্রতিদিন বৃষ্টির পরিমাণ মাপতে চাস। একটা ফাংশন লিখ যেখানে সপ্তাহের দিনে বৃষ্টির পরিমাণ ইনপুট নিলে বার্ষিক বৃষ্টির হার বের করবে।
function calculateRainfall(dailyRainfall) {
  let weeklyTotal = 0;
  for (let rain of dailyRainfall) {
    weeklyTotal += rain;
  }
  const annualRainfall = weeklyTotal * 52; // Total weekly rainfall multiplied by 52 weeks
  return `Weekly total rainfall: ${weeklyTotal} mm. Annual rainfall: ${annualRainfall} mm.`;
}

// Example usage:
const weeklyRain = [10, 15, 20, 5, 0, 25, 10]; // Daily rainfall in mm
const rainfall = calculateRainfall(weeklyRain);
console.log(rainfall);
