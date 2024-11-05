//19. বর্ষাকালে তুই প্রতিদিন বৃষ্টির পরিমাণ মাপতে চাস। একটা ফাংশন লিখ যেখানে সপ্তাহের দিনে বৃষ্টির পরিমাণ ইনপুট নিলে বার্ষিক বৃষ্টির হার বের করবে।
function calculateRainfall(dailyRainfall) {
  let weeklyTotal = 0;
  for (let rain of dailyRainfall) {
    weeklyTotal += rain;
  }
  const annualRainfall = weeklyTotal * 52; // সপ্তাহের মোট বৃষ্টি গুণ ৫২ সপ্তাহ
  return `সাপ্তাহিক মোট বৃষ্টি: ${weeklyTotal} মিমি। বার্ষিক বৃষ্টির হার: ${annualRainfall} মিমি।`;
}

// উদাহরণ ব্যবহার:
const weeklyRain = [10, 15, 20, 5, 0, 25, 10]; // প্রতিদিনের বৃষ্টি মিমিতে
const rainfall = calculateRainfall(weeklyRain);
console.log(rainfall);
