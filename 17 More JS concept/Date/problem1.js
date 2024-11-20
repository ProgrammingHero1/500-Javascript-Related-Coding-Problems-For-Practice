function printCurrentDateTime() {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().split(" ")[0];
  console.log(`আজকের তারিখ: ${date}, সময়: ${time}`);
}

printCurrentDateTime();
