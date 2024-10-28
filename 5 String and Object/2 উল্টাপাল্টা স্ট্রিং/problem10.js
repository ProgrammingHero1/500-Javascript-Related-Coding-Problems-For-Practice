//তুই এবার নিজের নামটাও উল্টে দেখতে পারিস! নিজের নাম স্ট্রিং আকারে নিয়ে সেটা রিভার্স কর, আর চেক কর কোন মজার আউটপুট আসে কিনা।
const myName = "Your Name";
let reverseName = "";
for (const letter of myName) {
  reverseName = letter + reverseName;
}
console.log("Problem 10:", reverseName);
