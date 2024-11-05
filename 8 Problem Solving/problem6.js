//6. তোকে অ্যাসিডিক আর বেসিক দ্রবণের তুলনা করতে বলল। একটা ফাংশন লিখ যেখানে দুইটা দ্রবণের পিএইচ ইনপুট দিলে কোনটা বেশি অ্যাসিডিক সেটা বলে দিবে।
function comparePH(ph1, ph2) {
  if (ph1 < ph2) {
    return "প্রথম দ্রবণটি বেশি অ্যাসিডিক।";
  } else if (ph2 < ph1) {
    return "দ্বিতীয় দ্রবণটি বেশি অ্যাসিডিক।";
  } else {
    return "দুটো দ্রবণের পিএইচ মান সমান।";
  }
}

// উদাহরণ ব্যবহার:
const phOfSubstance1 = 3;
const phOfSubstance2 = 5;
const result = comparePH(phOfSubstance1, phOfSubstance2);
console.log(result);
