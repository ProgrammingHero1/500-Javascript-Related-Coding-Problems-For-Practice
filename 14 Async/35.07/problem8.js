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
