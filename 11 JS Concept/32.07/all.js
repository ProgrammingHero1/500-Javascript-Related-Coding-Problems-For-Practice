// 1. Function that takes string, array, or object as parameter and logs it
function greeting(person) {
  console.log(person);
}

const name = "আলিম মামা";
const numbers = [5, 10, 15];
const laptop = { color: "red", size: "large" };

greeting(name); // Output: আলিম মামা
greeting(numbers); // Output: [5, 10, 15]
greeting(laptop); // Output: { color: 'red', size: 'large' }

// 2. Function that takes another function as parameter and calls it
function greetingWithFunction(greatingHandler) {
  console.log(greatingHandler());
}

function greatingHandler() {
  return "হ্যালো";
}

greetingWithFunction(greatingHandler); // Output: হ্যালো

// 3. Function calling another function inside it
function callAnotherFunction() {
  function greetingHandler() {
    console.log("হ্যালো");
  }
  greetingHandler(); // Calling greetingHandler inside callAnotherFunction
}

callAnotherFunction(); // Output: হ্যালো

// 4. Passing a parameter (name) to greeting function and calling greetingHandler
function greetingHandler(name) {
  console.log("Good Morning,", name);
}

greetingHandler("টম হ্যাঙ্কস"); // Output: Good Morning, টম হ্যাঙ্কস
greetingHandler("টম ক্রুজ"); // Output: Good Morning, টম ক্রুজ

// 5. Function with different greetings for different names
function greeting(greatingHandler, name) {
  greatingHandler(name); // Calling the function passed as parameter with name
}

function greetingHandler(name) {
  console.log("Good Morning,", name);
}

function greetingEvening(name) {
  console.log("Good Evening,", name);
}

greeting(greetingHandler, "Tom Hanks"); // Output: Good Morning, Tom Hanks
greeting(greetingEvening, "Tom Salman"); // Output: Good Evening, Tom Salman

// 6. Passing multiple functions (morning, evening) to greeting function
greeting(greetingHandler, "Tom Hanks"); // Output: Good Morning, Tom Hanks
greeting(greetingEvening, "Tom Salman"); // Output: Good Evening, Tom Salman

// 7. Function that takes name and returns a greeting message with a custom phrase
function greetingWithCustomMessage(name) {
  console.log(name + ", আলহামদুলিল্লাহ");
}

greetingWithCustomMessage("আলিম মামা"); // Output: আলিম মামা, আলহামদুলিল্লাহ

// 8. Greeting function calling multiple functions and logging the time-based message
greeting(greetingHandler, "Tom Hanks"); // Output: Good Morning, Tom Hanks
greeting(greetingEvening, "Tom Salman"); // Output: Good Evening, Tom Salman

// 9. Function with multiple names for greetings
function greetMultipleNames(handler, names) {
  names.forEach((name) => handler(name)); // Loop through names and call handler for each
}

greetMultipleNames(greetingHandler, ["টম হ্যাঙ্কস", "টম ব্র্যাডি"]); // Output: Good Morning, টম হ্যাঙ্কস, Good Morning, টম ব্র্যাডি
greetMultipleNames(greetingEvening, ["টম সোলাইমান", "টম সালমান"]); // Output: Good Evening, টম সোলাইমান, Good Evening, টম সালমান

// 10. Calling greeting multiple times with different names
greeting(greetingHandler, "Tom Hanks"); // Output: Good Morning, Tom Hanks
greeting(greetingEvening, "Tom Salman"); // Output: Good Evening, Tom Salman
