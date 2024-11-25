const rents = [25000, 30000, 18000, 27000];
const hasAffordableRent = rents.some((rent) => rent < 20000);
console.log(hasAffordableRent);
// Output: true (18000 ভাড়া আছে, তাই true রিটার্ন করবে)
