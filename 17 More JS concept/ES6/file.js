const fs = require("fs");
const path = require("path");

for (let i = 1; i <= 10; ++i) {
  const folderName = `problem${i}`;
  const folderPath = path.join(__dirname, folderName);
  fs.mkdirSync(folderPath);
}
