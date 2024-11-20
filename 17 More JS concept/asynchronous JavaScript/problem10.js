new Promise((resolve) => {
  resolve("Step 1 complete");
})
  .then((message) => {
    console.log(message);
    return "Step 2 complete";
  })
  .then((message) => {
    console.log(message);
    return "All steps complete";
  })
  .then((message) => {
    console.log(message);
  });
