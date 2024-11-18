function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("Status Code:", response.status);
      return response.json();
    })
    .then((data) => console.log("Data:", data))
    .catch((error) => console.error("Error:", error));
}
