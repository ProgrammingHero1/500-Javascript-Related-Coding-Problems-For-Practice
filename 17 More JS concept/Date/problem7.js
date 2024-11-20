function addHoursToDate(dateString, hours) {
  const date = new Date(dateString);
  date.setHours(date.getHours() + hours);
  console.log(date.toISOString());
}

function subtractHoursFromDate(dateString, hours) {
  const date = new Date(dateString);
  date.setHours(date.getHours() - hours);
  console.log(date.toISOString());
}

addHoursToDate("2024-11-20T12:00:00", 5);
subtractHoursFromDate("2024-11-20T12:00:00", 3);
