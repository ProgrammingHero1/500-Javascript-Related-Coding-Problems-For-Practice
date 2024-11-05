//18. তোর বাবার দোকানের জন্য লাভ-ক্ষতি হিসাব করতে চাস। একটা ফাংশন লিখ যেখানে কিনা দাম আর বিক্রির দাম ইনপুট নিলে লাভ বা ক্ষতি বের করবে।
function calculateProfitOrLoss(buyPrice, sellPrice) {
  if (sellPrice > buyPrice) {
    const profit = sellPrice - buyPrice;
    return `লাভ হয়েছে: ${profit} টাকা।`;
  } else if (sellPrice < buyPrice) {
    const loss = buyPrice - sellPrice;
    return `ক্ষতি হয়েছে: ${loss} টাকা।`;
  } else {
    return "না লাভ, না ক্ষতি। দাম সমান।";
  }
}

// উদাহরণ ব্যবহার:
const buyPrice = 100;
const sellPrice = 85;
const result = calculateProfitOrLoss(buyPrice, sellPrice);
console.log(result);
