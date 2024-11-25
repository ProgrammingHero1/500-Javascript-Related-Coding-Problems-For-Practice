const workouts = [35, 45, 50, 25, 40];
const allGoodWorkouts = workouts.every((workout) => workout > 30);
console.log(allGoodWorkouts);
// Output: false (২৫ মিনিটের একটা ওয়ার্কআউট আছে, তাই false রিটার্ন করবে)
