async function sequentialTasks() {
  console.log("Fetching user info...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("User info fetched.");

  console.log("Fetching user's posts...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("User's posts fetched.");

  console.log("Fetching post comments...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Post comments fetched.");
}

sequentialTasks();
