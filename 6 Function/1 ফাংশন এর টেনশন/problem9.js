// Problem 9: তোর পয়সা থেকে ব্যয়ের পর কত বাকি থাকবে তা দেখাবে
function calculateRemainingMoney(totalMoney, spentMoney) {
  const remaining = totalMoney - spentMoney;
  console.log("বাকি টাকা:", remaining);
}
calculateRemainingMoney(50, 20); // Output: বাকি টাকা: 30
