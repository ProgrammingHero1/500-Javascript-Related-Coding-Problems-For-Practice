console.log("Task Start");

setTimeout(() => console.log("Normal Task"), 0);

Promise.resolve().then(() => console.log("Important Task"));

console.log("Task End");
