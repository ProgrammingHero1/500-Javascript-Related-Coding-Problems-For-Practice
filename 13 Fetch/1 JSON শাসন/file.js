const fs = require("fs");
const path = require("path");

for (let i = 1; i <= 10; ++i) {
  const filename = `task${i}.js`;
  const filepath = path.join(__dirname, filename);

  fs.writeFileSync(filepath, "", "utf8");
}
