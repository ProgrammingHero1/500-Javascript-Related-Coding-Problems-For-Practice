function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "New Post Title",
      body: "This is the body of the new post.",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((post) => console.log("New Post:", post))
    .catch((error) => console.error("Error:", error));
}
