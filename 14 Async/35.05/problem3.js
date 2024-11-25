// Problem 3: Fetching a joke from an API
async function fetchJoke() {
  try {
    let response = await fetch("https://api.example.com/joke");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("ডাটা আনতে পারিনি, error:", error);
  }
}
fetchJoke();
