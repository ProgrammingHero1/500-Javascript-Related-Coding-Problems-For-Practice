// Problem 1: Call functions in the correct order (hello, world, !)
function hello() {
  console.log("হ্যালো");
}
function world() {
  console.log("ওয়ার্ল্ড");
}
function exclamation() {
  console.log("!");
}

// Calling functions in the correct order
hello(); // Prints "হ্যালো"
world(); // Prints "ওয়ার্ল্ড"
exclamation(); // Prints "!"

// Problem 2: Restaurant process in the correct order
function openRestaurant() {
  console.log("রেস্টুরেন্ট ওপেন হলো");
}
function takeOrder() {
  console.log("অর্ডার নিচ্ছি");
}
function serveFood() {
  console.log("খাবার পরিবেশন করা হচ্ছে");
}

// Calling the restaurant functions in sequence
openRestaurant();
takeOrder();
serveFood();

// Problem 3: Print messages using setTimeout
console.log("শুভ সকাল"); // Immediately prints
setTimeout(() => console.log("কেমন আছিস?"), 1000); // Prints after 1 second
setTimeout(() => console.log("আশা করি ভালো আছিস!"), 3000); // Prints after 2 seconds (total 3s from start)

// Problem 4: Breakfast, lunch, and dinner functions with delays
function breakfast() {
  console.log("Breakfast is served");
}
function lunch() {
  console.log("Lunch is served");
}
function dinner() {
  console.log("Dinner is served");
}

// Call each function with different time delays
setTimeout(breakfast, 3000); // Runs after 3 seconds
setTimeout(lunch, 2000); // Runs after 2 seconds
setTimeout(dinner, 1000); // Runs after 1 second

// Problem 5: Sleep time messages with delays
console.log("ঘুমানোর সময় হলো"); // Immediately prints
setTimeout(() => console.log("এখন ঘুমাচ্ছি"), 5000); // Prints after 5 seconds
setTimeout(() => console.log("স্বপ্নে দেখা হবে"), 10000); // Prints after 10 seconds

// Problem 6: Tasks in sequence with time delays
console.log("পরিষ্কার করা"); // Prints immediately
setTimeout(() => console.log("পড়ালেখা করা"), 2000); // Prints after 2 seconds
setTimeout(() => console.log("ঘুমানো"), 5000); // Prints after 5 seconds

// Problem 7: Repeating a message and stopping it
let intervalId = setInterval(() => {
  console.log("তুই কি করছিস?");
}, 2000); // Prints every 2 seconds

setTimeout(() => {
  clearInterval(intervalId); // Stops printing after 6 seconds
}, 6000);

// Problem 8: Pirate crew preparation
console.log("দল প্রস্তুত হচ্ছে"); // Prints immediately
let memberId = 1;
let crewInterval = setInterval(() => {
  console.log(`সদস্য ${memberId} প্রস্তুত`);
  memberId++;
  if (memberId > 5) {
    clearInterval(crewInterval); // Stops after 5 members
  }
}, 1000); // Prints every 1 second

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

// Problem 10: Event management in the correct sequence
function gateOpening() {
  console.log("গেট ওপেনিং");
}
function performanceShow() {
  console.log("পারফরমেন্স শো");
}
function concertEnding() {
  console.log("কনসার্ট এন্ডিং");
}

// Call events with setTimeout to simulate the event loop
gateOpening(); // Immediately runs
setTimeout(performanceShow, 2000); // Runs after 2 seconds
setTimeout(concertEnding, 4000); // Runs after 4 seconds
