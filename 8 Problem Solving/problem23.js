//23. তোর ট্রাফিক সিগন্যাল প্র্যাকটিস করা দরকার। একটা ফাংশন লিখ যেখানে সিগন্যালের রঙ ইনপুট নিলে গাড়ি চলবে কি থামবে সেটা বলে দিবে।
function trafficSignal(action) {
  const color = action.toLowerCase();
  if (color === "লাল") {
    return "থামো!";
  } else if (color === "হলুদ") {
    return "দেখো, পরের ইশারা আসছে।";
  } else if (color === "সবুজ") {
    return "চলো!";
  } else {
    return "অবৈধ রঙ।";
  }
}

// উদাহরণ ব্যবহার:
const signalColor = "হলুদ";
const signalAction = trafficSignal(signalColor);
console.log(signalAction);
