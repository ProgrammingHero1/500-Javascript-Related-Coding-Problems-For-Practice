//5. তোরা মুভিতে গেছিস, আর বয়সের ভিত্তিতে টিকিটের দাম নির্ধারণ হবে। একটা ফাংশন লিখ যেখানে বয়স ইনপুট দিলে টিকিটের দাম দেখাবে।
function getTicketPrice(age) {
  if (age < 12) {
    return "টিকিটের দাম: ৫ টাকা";
  } else if (age >= 12 && age <= 17) {
    return "টিকিটের দাম: ৭ টাকা";
  } else {
    return "টিকিটের দাম: ১০ টাকা";
  }
}

// উদাহরণ ব্যবহার:
const ageOfPerson = 15;
const ticketPrice = getTicketPrice(ageOfPerson);
console.log(ticketPrice);
