function getDateFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = date.toISOString().replace("T", " ").split(".")[0];
  console.log(formattedDate);
}

getDateFromTimestamp(1698412800000);
