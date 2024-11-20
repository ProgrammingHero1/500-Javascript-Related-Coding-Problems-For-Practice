function oneMonthLater() {
  const now = new Date();
  now.setMonth(now.getMonth() + 1);
  console.log(now.toISOString().split("T")[0]);
}

oneMonthLater();
