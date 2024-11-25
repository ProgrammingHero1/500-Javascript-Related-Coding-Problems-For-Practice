// Problem 8: Fetch weather data using async/await
async function fetchWeatherData() {
  try {
    let response = await fetch("https://api.example.com/weather");
    let data = await response.json();
    console.log("Weather Data Loaded:", data);
  } catch {
    console.error("Failed to Load Weather Data");
  }
}
fetchWeatherData();
