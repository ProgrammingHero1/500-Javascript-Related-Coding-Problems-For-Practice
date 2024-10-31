// Problem 7: তোকে একটা ফাংশন বানাতে বলছে, যেটা গোপনে হিসাব করে দেবে কার জন্মদিন কবে।? যদি জন্মসাল দিস, তাহলে ফাংশন বলবে কত বছর বয়স। যেমন, যদি 2000 দিস, তাহলে আউটপুট হবে "24 বছর" (বর্তমান বছর 2024)।

function calculateAge(birthYear) {
  const currentYear = 2024;
  const age = currentYear - birthYear;
  console.log("তোর বয়স:", age, "বছর");
}
calculateAge(2000); // Output: তোর বয়স: 24 বছর
