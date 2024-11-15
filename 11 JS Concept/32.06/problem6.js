// Problem 6: taskTracker function tracks tasks done per session.
function taskTracker() {
  let taskCount = 0;
  return function () {
    taskCount++; // Increase task count with each call
    return taskCount;
  };
}

const tasks = taskTracker();
console.log(tasks()); // First task, taskCount = 1
console.log(tasks()); // Second task, taskCount = 2
console.log(tasks()); // Third task, taskCount = 3
