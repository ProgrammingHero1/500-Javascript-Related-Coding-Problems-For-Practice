// Problem 10: Promise for going to a movie
function moviePromise() {
  return new Promise((resolve, reject) => {
    let canGoToMovie = true; // Change to false to test rejection
    if (canGoToMovie) {
      resolve("মুভি দেখব!");
    } else {
      reject("না যেতে পারলাম না!");
    }
  });
}
moviePromise().then(console.log).catch(console.error);
