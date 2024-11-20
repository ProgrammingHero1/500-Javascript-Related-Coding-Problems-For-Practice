function outer() {
  var a = 10;

  function middle() {
    var b = 20;

    function inner() {
      var c = 30;
      console.log(a + b + c);
    }

    inner();
  }

  middle();
}

outer();

// Scope Chain:

// outer এর Execution Context এ a = 10।
// middle এর Execution Context এ b = 20।
// inner এর Execution Context এ c = 30।
