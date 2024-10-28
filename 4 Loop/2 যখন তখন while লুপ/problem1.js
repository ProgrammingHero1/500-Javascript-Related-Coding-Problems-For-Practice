//তোর কাছে 10টা আপেল আছে। প্রথমে 3টা আপেল খেয়ে ফেললি। একটা while লুপ লিখে হিসাব করে দেখ, বাকি আপেল কত থাকলো।

let apples = 10;
let eaten = 3;

while (eaten > 0) {
  apples--;
  eaten--;
}

console.log("বাকি আপেল:", apples);
