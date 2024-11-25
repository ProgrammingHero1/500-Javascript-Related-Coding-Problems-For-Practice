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
