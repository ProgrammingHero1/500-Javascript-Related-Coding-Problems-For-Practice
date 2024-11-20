console.log("Taking order...");

setTimeout(() => {
  console.log("Cooking food...");
  setTimeout(() => {
    console.log("Food served!");
  }, 2000);
}, 3000);
