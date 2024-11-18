const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);
const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([postsPromise, usersPromise])
  .then(([posts, users]) => {
    console.log("Posts:", posts);
    console.log("Users:", users);
  })
  .catch((error) => console.error("Error:", error));
