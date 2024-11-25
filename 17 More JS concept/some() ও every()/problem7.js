const stock = [12, 8, 4, 15, 7];
const isLowStock = stock.some((item) => item < 5);
console.log(isLowStock);
// Output: true (৪ স্টকের একটা আইটেম আছে, তাই true রিটার্ন করবে)
