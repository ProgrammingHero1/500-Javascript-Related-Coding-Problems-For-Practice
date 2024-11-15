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
