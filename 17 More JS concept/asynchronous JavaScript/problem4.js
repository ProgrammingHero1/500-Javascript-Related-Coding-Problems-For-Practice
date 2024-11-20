function fetchWithError() {
  fetch("https://invalid-api-url.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error.message));
}

fetchWithError();
