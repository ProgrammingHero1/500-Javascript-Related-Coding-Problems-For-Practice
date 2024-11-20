function getYearBounds(year) {
  const firstDay = `${year}-01-01`;
  const lastDay = `${year}-12-31`;
  console.log(`প্রথম দিন: ${firstDay}, শেষ দিন: ${lastDay}`);
}

getYearBounds(2024);
