const shop = {
  owner: "Rahim",
  products: ["phone", "laptop", "camera"],
  isOpen: true,
  revenue: 120000,
  address: {
    city: "Dhaka",
    country: "BD",
  },
};

// JSON ফরম্যাটে কনভার্ট করা
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// JSON থেকে জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট করা
const shopObj = JSON.parse(shopJSON);

// "city" প্রপার্টির মান দেখা
console.log(shopObj.address.city);
