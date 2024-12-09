//5. তোরা মুভিতে গেছিস, আর বয়সের ভিত্তিতে টিকিটের দাম নির্ধারণ হবে। একটা ফাংশন লিখ যেখানে বয়স ইনপুট দিলে টিকিটের দাম দেখাবে।
function getTicketPrice(age) {
  if (age < 12) {
    return "Ticket price: 5 Taka.";
  } else if (age >= 12 && age <= 17) {
    return "Ticket price: 7 Taka.";
  } else {
    return "Ticket price: 10 Taka.";
  }
}

// Example usage:
const ageOfPerson = 15;
const ticketPrice = getTicketPrice(ageOfPerson);
console.log(ticketPrice);
