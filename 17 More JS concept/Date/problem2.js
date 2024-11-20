function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} একটি লিপ ইয়ার`);
  } else {
    console.log(`${year} একটি লিপ ইয়ার নয়`);
  }
}

isLeapYear(2024);
