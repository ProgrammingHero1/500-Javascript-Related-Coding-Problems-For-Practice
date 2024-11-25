// Problem 9: Shop profit updates every hour, stops after 3 hours
console.log("দোকান খোলা হলো"); // Prints immediately
let hour = 1;
let profitInterval = setInterval(() => {
  console.log(`ঘণ্টা ${hour}: লাভ আপডেট হলো`);
  hour++;
  if (hour > 3) {
    clearInterval(profitInterval); // Stops after 3 updates
    console.log("দোকান বন্ধ হলো"); // Final print
  }
}, 3600000); // 1-hour interval (use 1000ms for testing)
