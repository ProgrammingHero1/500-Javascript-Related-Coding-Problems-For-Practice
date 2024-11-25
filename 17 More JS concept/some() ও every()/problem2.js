const ages = [24, 23, 25, 20, 27];
const allGraduates = ages.every((age) => age > 22);
console.log(allGraduates);
// Output: false (20 বছর বয়সের একজন আছে, তাই false রিটার্ন করবে)
