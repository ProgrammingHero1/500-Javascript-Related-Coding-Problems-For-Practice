// Problem 1: Fetch API and log data
function loadPosts() {
  toggleLoader(true); // Show loader
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log("Posts:", data);
      toggleLoader(false); // Hide loader
      displayPosts(data);
    })
    .catch((err) => {
      toggleLoader(false); // Hide loader
      console.error("Error:", err);
    });
}

// Problem 2: Convert and check response
function loadUsers() {
  toggleLoader(true);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Users:", data);
      toggleLoader(false);
      displayUsers(data);
    })
    .catch((err) => {
      toggleLoader(false);
      console.error("Error fetching users:", err);
    });
}

// Problem 3: Display posts in the UI
function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = ""; // Clear old content

  posts.slice(0, 10).forEach((post) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="loadSinglePost(${post.id})">View Details</button>
        `;
    postContainer.appendChild(div);
  });
}

// Problem 4: Fetch single post details
function loadSinglePost(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => {
      alert(`Title: ${data.title}\nBody: ${data.body}`);
    })
    .catch((err) => console.error("Error:", err));
}

// Problem 5: Display users in the UI
function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Clear old content

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });

  // Display user cards
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = ""; // Clear old content

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;
    userContainer.appendChild(card);
  });
}

// Problem 6: Dynamic content
function loadDynamicPosts() {
  toggleLoader(true);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      toggleLoader(false);
      displayPosts(data);
    })
    .catch((err) => {
      toggleLoader(false);
      console.error("Error:", err);
    });
}

// Problem 7: Show loader
function toggleLoader(show) {
  const loader = document.getElementById("loader");
  loader.style.display = show ? "block" : "none";
}

// Problem 8: Error handling with async/await
async function loadPostsWithErrorHandling() {
  toggleLoader(true);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const data = await response.json();
    console.log("Posts with Async:", data);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    toggleLoader(false);
  }
}

// Problem 9: Display dynamic user list in styled cards (from Problem 10)
function displayDynamicUserCards(users) {
  const container = document.getElementById("user-container");
  container.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
            <p>Company: ${user.company.name}</p>
        `;
    container.appendChild(card);
  });
}
