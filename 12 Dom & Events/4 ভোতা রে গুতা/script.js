// Task 1: Change Background Color
document.getElementById("btn-red").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

// Task 2: Change Text
document
  .getElementById("btn-change-text")
  .addEventListener("click", function () {
    document.getElementById("text").innerText = "Hello, JavaScript!";
  });

// Task 3: Update Text from Input
document
  .getElementById("btn-update-text")
  .addEventListener("click", function () {
    const userInput = document.getElementById("text-input").value;
    document.getElementById("input-output").innerText = userInput;
    document.getElementById("text-input").value = ""; // Clear the input field
  });

// Task 4: Comment Posting System
document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    const commentInput = document.getElementById("comment-input").value;
    if (commentInput.trim() !== "") {
      const commentContainer = document.getElementById("comments-container");
      const newComment = document.createElement("p");
      newComment.innerText = commentInput;
      commentContainer.appendChild(newComment);
      document.getElementById("comment-input").value = ""; // Clear the textarea
    } else {
      alert("Please write a comment before posting!");
    }
  });

// Task 5: Event Delegation for List Items
document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      alert(`You clicked on: ${event.target.innerText}`);
    }
  });

// Bonus Task: Change Theme
document
  .getElementById("btn-theme-change")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
    document.querySelectorAll("button").forEach((button) => {
      button.style.backgroundColor = "#555";
      button.style.color = "#fff";
    });
  });
