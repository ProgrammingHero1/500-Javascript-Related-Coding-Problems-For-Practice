//12. তোর পরীক্ষার নাম্বারগুলো array আকারে আছে। একটা ফাংশন লিখ যেখানে এই array ইনপুট নিলে গড় নাম্বার বের করবে।
function calculateAverage(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  const average = sum / numbers.length;
  return `নাম্বারের গড়: ${average}`;
}

// উদাহরণ ব্যবহার:
const examScores = [88, 95, 77, 84, 93];
const averageScore = calculateAverage(examScores);
console.log(averageScore);
