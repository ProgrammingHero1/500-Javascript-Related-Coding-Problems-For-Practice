// Problem 10: প্রতিটি লেবুর দাম দিয়ে কয়টা লেবু কেনা যাবে তা দেখাবে
function buyOranges(totalMoney, pricePerOrange) {
  const oranges = Math.floor(totalMoney / pricePerOrange);
  console.log("তুই", oranges, "টা লেবু কিনতে পারবি।");
}
buyOranges(100, 10); // Output: তুই 10 টা লেবু কিনতে পারবি।
