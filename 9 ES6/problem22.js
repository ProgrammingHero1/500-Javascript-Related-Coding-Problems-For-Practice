//22. `totalMarks` আর `passingMarks` নিয়ে একটা ফাংশন তৈরি কর। কেউ `passingMarks` না দিলে ডিফল্ট হিসেবে ৪০ ধরবি।
const examResult = (totalMarks, passingMarks = 40) =>
  console.log(`তোর পাসিং মার্ক: ${passingMarks} এবং total: ${totalMarks}`);
examResult(90);
