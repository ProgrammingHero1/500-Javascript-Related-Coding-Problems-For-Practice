function step1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 2000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3");
  }, 3000);
}

step1(() => step2(() => step3()));
