// 9. Function with multiple names for greetings
function greetMultipleNames(handler, names) {
  names.forEach((name) => handler(name)); // Loop through names and call handler for each
}

function greetingHandler(name) {
  console.log("Good Morning,", name); // Log the morning greeting
}

function greetingEvening(name) {
  console.log("Good Evening,", name); // Log the evening greeting
}

greetMultipleNames(greetingHandler, ["Tom Hanks", "Tom Brady"]);

greetMultipleNames(greetingEvening, ["Tom Soleiman", "Tom Salman"]);
