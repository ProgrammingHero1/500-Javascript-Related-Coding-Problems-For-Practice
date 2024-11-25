// Problem 6: Async function to fetch user data
async function fetchUserData() {
  try {
    let response = await fetch("https://api.example.com/user");
    let data = await response.json();
    console.log("Data Loaded Successfully:", data);
  } catch {
    console.error("Error Loading Data");
  }
}
fetchUserData();
