//6. তোকে অ্যাসিডিক আর বেসিক দ্রবণের তুলনা করতে বলল। একটা ফাংশন লিখ যেখানে দুইটা দ্রবণের পিএইচ ইনপুট দিলে কোনটা বেশি অ্যাসিডিক সেটা বলে দিবে।
function comparePH(ph1, ph2) {
  if (ph1 < ph2) {
    return "The first solution is more acidic.";
  } else if (ph2 < ph1) {
    return "The second solution is more acidic.";
  } else {
    return "Both solutions have the same pH value.";
  }
}

// Example usage:
const phOfSubstance1 = 3;
const phOfSubstance2 = 5;
const result = comparePH(phOfSubstance1, phOfSubstance2);
console.log(result);
