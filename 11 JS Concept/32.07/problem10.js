// 10. Calling greeting multiple times with different names

function greeting(greetingFunction, name) {
  greetingFunction(name);
}

function greetingHandler(name) {
  console.log("Good Morning,", name);
}

function greetingEvening(name) {
  console.log("Good Evening,", name);
}

greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Alice Johnson");
greeting(greetingEvening, "Tom Salman");
greeting(greetingEvening, "Michael Scott");
