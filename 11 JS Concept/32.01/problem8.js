// Problem 8: তুই একটা গেম খেলছিস, যেখানে তুই ১০০ পয়েন্ট দিয়ে শুরু করছিস। প্রতি ভুলে ১০ পয়েন্ট কেটে যাবে। ৩ বার ভুল করলি, এখন কনসোল-এ দেখ, তোর কাছে কতো পয়েন্ট বাকি আছে।
let initialPoints = 100;
let mistakes = 3;
let pointsLost = mistakes * 10;
let remainingPoints = initialPoints - pointsLost;
console.log("Remaining points:", remainingPoints);
