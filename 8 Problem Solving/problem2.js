//2. তুই এক বন্ধুকে দেখাইলি কিভাবে বাক্যের শব্দ গোনা যায়। একটা ফাংশন লিখ, যেটা কোনো বাক্য ইনপুট নিলে বলে দিবে সেখানে কতগুলো শব্দ আছে। যেমন, "আমি প্রোগ্রামিং শিখছি" দিলে আউটপুট হবে ৩।

function countWords(sentence) {
  const words = sentence.trim().split(" ");

  return words.length;
}

const mySentence = "I am Learning Javascript";
const wordCount = countWords(mySentence);
console.log(`Word Counts: ${wordCount}`);
