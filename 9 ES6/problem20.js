//20. একটা ফাংশন তৈরি কর যা প্রথম নাম আর ডাকনাম নিবে। যদি কোনো নাম না দেওয়া হয়, তাহলে `Unknown Person` আর `Unnamed` দেখাবে।
const introduce = (name = "Unknown Person", nickname = "Unnamed") => {
  console.log(`নাম: ${name}, ডাকনাম: ${nickname}`);
};
introduce();
