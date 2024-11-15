document.getElementById("submit").addEventListener("click", function () {
  const errorTag = document.getElementById("error");
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const nameField = document.getElementById("firstName");
  const firstName = nameField.value;
  const timeField = document.getElementById("time");
  const timeText = timeField.value;
  const clickButton = document.getElementById("clickBtn");
  let clickCount = 0;

  // Problem 1: Age validation for children
  try {
    const age = parseInt(ageText);
    if (isNaN(age)) throw "Please enter a valid number for age.";
    if (age < 18) throw "Baccha kaccha is not allowed.";
    errorTag.innerHTML = "Welcome!";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 2: Job age validation between 20-30
  try {
    const jobAge = parseInt(ageText);
    if (isNaN(jobAge)) throw "Please enter a valid number for job age.";
    if (jobAge < 20) throw "Too young for this job.";
    if (jobAge > 30) throw "Overqualified!";
    errorTag.innerHTML = "You are eligible for the job!";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 3: Input validation for numbers only
  try {
    const inputValue = parseInt(ageText);
    if (isNaN(inputValue)) throw "Please enter a valid number.";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 4: Count clicks with reset after 5
  clickButton.addEventListener("click", function () {
    clickCount++;
    if (clickCount >= 5) {
      errorTag.innerHTML = "Enough clicks for now!";
      clickCount = 0; // reset click count
    }
  });

  // Problem 5: Empty or invalid input message
  try {
    if (ageText === "" || isNaN(ageText)) throw "Empty or invalid input!";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 6: Validate time input in minutes
  try {
    const time = parseInt(timeText);
    if (isNaN(time)) throw "Please enter time in minutes";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 7: First name cannot be empty
  try {
    if (firstName === "") throw "First name cannot be empty";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 8: Catch error in a simple console.log
  try {
    console.log("Hello");
    console.log(bhai); // will cause an error
  } catch (err) {
    console.log("Something went wrong");
  }

  // Problem 9: Age validation with throw statement
  try {
    const age = parseInt(ageText);
    if (isNaN(age)) throw "No age found";
  } catch (err) {
    errorTag.innerHTML = err;
  }

  // Problem 10: Reset input field and log with finally
  try {
    ageField.value = ""; // reset input field
    console.log("Input field reset done");
  } finally {
    // Always run this block
    console.log("Execution finished");
  }
});
