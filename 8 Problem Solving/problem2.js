//2. তুই এক বন্ধুকে দেখাইলি কিভাবে বাক্যের শব্দ গোনা যায়। একটা ফাংশন লিখ, যেটা কোনো বাক্য ইনপুট নিলে বলে দিবে সেখানে কতগুলো শব্দ আছে। যেমন, "আমি প্রোগ্রামিং শিখছি" দিলে আউটপুট হবে ৩।
function countWords(sentence) {
  // বাক্যটিকে স্পেস দিয়ে ভাগ করে একটি অ্যারে তৈরি করা
  const words = sentence.trim().split(" ");
  // শব্দের সংখ্যা রিটার্ন করা
  return words.length;
}

// উদাহরণ ব্যবহার:
const mySentence = "আমি জাভাস্ক্রিপ্ট শিখছি।";
const wordCount = countWords(mySentence);
console.log(`শব্দের সংখ্যা: ${wordCount}`);
