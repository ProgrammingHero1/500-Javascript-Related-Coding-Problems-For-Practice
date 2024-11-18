fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const container = document.getElementById("post-container");
    posts.slice(0, 10).forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      container.appendChild(div);
    });
  })
  .catch((error) => console.error("Error:", error));
