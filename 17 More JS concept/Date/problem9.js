function setSpecificTime() {
  const now = new Date();
  now.setHours(10, 30, 0, 0);
  console.log(now.toISOString());
}

setSpecificTime();
