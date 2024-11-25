const discounts = [10, 25, 60, 40];
const hasBigDiscount = discounts.some((discount) => discount > 50);
console.log(hasBigDiscount);
// Output: true (৬০% ডিসকাউন্ট আছে, তাই true রিটার্ন করবে)
