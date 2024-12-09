//23. তোর ট্রাফিক সিগন্যাল প্র্যাকটিস করা দরকার। একটা ফাংশন লিখ যেখানে সিগন্যালের রঙ ইনপুট নিলে গাড়ি চলবে কি থামবে সেটা বলে দিবে।
function trafficSignal(action) {
  const color = action.toLowerCase();
  if (color === "red") {
    return "Stop!";
  } else if (color === "yellow") {
    return "Wait, the next signal is coming.";
  } else if (color === "green") {
    return "Go!";
  } else {
    return "Invalid color.";
  }
}

// Example usage:
const signalColor = "yellow";
const signalAction = trafficSignal(signalColor);
console.log(signalAction);
