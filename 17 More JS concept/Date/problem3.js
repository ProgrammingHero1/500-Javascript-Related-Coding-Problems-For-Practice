function printCustomFormattedDate() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB").replaceAll("/", "-");
  const time = now.toTimeString().slice(0, 5);
  console.log(`তারিখ: ${date}, সময়: ${time}`);
}

printCustomFormattedDate();
