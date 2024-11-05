//20. তোর ক্লাসের টেস্টের স্কোরগুলো array আকারে আছে। একটা ফাংশন লিখ যেখানে এই array ইনপুট নিলে সবচেয়ে কম স্কোর বের করবে।
function findLowestScore(scores) {
  if (scores.length === 0) {
    return "স্কোরের তালিকা ফাঁকা।";
  }
  let min = scores[0];
  for (let score of scores) {
    if (score < min) {
      min = score;
    }
  }
  return `সবচেয়ে কম স্কোর: ${min}`;
}

// উদাহরণ ব্যবহার:
const classScores = [82, 95, 77, 84, 93];
const lowestScore = findLowestScore(classScores);
console.log(lowestScore);
