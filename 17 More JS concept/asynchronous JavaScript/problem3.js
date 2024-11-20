function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(`Post Title: ${data.title}`))
    .catch((error) => console.error("Error:", error));
}

fetchPost();
