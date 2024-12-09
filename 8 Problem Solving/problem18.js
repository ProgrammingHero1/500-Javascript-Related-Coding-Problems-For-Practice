//18. তোর বাবার দোকানের জন্য লাভ-ক্ষতি হিসাব করতে চাস। একটা ফাংশন লিখ যেখানে কিনা দাম আর বিক্রির দাম ইনপুট নিলে লাভ বা ক্ষতি বের করবে।
function calculateProfitOrLoss(buyPrice, sellPrice) {
  if (sellPrice > buyPrice) {
    const profit = sellPrice - buyPrice;
    return `Profit: ${profit} Taka.`;
  } else if (sellPrice < buyPrice) {
    const loss = buyPrice - sellPrice;
    return `Loss: ${loss} Taka.`;
  } else {
    return "No profit, no loss. The price is the same.";
  }
}

// Example usage:
const buyPrice = 100;
const sellPrice = 85;
const result = calculateProfitOrLoss(buyPrice, sellPrice);
console.log(result);
