function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then(() => console.log("Post deleted"))
    .catch((error) => console.error("Error:", error));
}
