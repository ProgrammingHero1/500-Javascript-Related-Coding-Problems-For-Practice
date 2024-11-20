console.log(this);

function greet() {
  console.log(this);
}

greet();

// Explanation:

// Global Execution Context এ this গ্লোবাল অবজেক্ট (window বা global) নির্দেশ করবে।
// greet ফাংশনের ভিতরেও this গ্লোবাল অবজেক্ট নির্দেশ করবে কারণ এটি সাধারণ ফাংশন।
