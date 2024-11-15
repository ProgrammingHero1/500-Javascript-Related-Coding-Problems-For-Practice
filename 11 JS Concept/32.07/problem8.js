// 8. Greeting function calling multiple functions and logging the time-based message
function greeting(greetingFunction, name) {
  greetingFunction(name); // Call the provided function with the name
}

function greetingHandler(name) {
  console.log("Good Morning,", name);
}

function greetingEvening(name) {
  console.log("Good Evening,", name);
}

greeting(greetingHandler, "Tom Hanks");
greeting(greetingEvening, "Tom Salman");
