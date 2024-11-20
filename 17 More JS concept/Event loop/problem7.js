let count = 1;

function timer() {
  if (count <= 5) {
    console.log(count);
    count++;
    setTimeout(timer, 1000);
  }
}

timer();
