const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 done"), 2000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 done"), 3000)
);
const task3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 done"), 1000)
);

Promise.all([task1, task2, task3]).then((messages) => {
  console.log(messages);
  console.log("All tasks completed");
});
