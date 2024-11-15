// 6. Passing multiple functions (morning, evening) to greeting function
function greetingHandler(name) {
  console.log("Good Morning,", name);
}
function greetingEvening(name) {
  console.log("Good Evening,", name);
}
function greeting(greatingHandler, name) {
  greatingHandler(name);
}

greeting(greetingHandler, "Tom Hanks");
greeting(greetingEvening, "Tom Salman");
