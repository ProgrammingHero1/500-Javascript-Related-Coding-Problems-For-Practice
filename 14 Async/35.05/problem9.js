// Problem 9: Random task completion from a list
function randomTaskCompletion(tasks) {
  return new Promise((resolve, reject) => {
    let taskCompleted = Math.random() < 0.5; // Simulating success or failure
    if (taskCompleted) {
      resolve("কাজটা সফলভাবে শেষ হয়েছে");
    } else {
      reject("কাজটা ব্যর্থ হয়েছে");
    }
  });
}
randomTaskCompletion(["Task 1", "Task 2", "Task 3"])
  .then(console.log)
  .catch(console.error);
