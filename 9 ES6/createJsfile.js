const fs = require("fs");
const path = require("path");

for (let i = 1; i <= 40; ++i) {
  const filename = `problem${i}.js`;
  const filepath = path.join(__dirname, filename);

  fs.writeFileSync(filepath, "", "utf8");
  console.log(`Created : ${filename}`);
}
