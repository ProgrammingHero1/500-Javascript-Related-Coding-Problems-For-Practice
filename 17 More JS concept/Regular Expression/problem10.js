const url = "https://www.example.com/path/to/page";
const domain = url.match(/https?:\/\/(www\.)?([\w.-]+)/)[2]; // Extract domain name
console.log(domain); // Output: "example.com"
