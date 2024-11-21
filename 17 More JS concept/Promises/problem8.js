function bookTicket(isSeatAvailable) {
  return new Promise((resolve, reject) => {
    if (isSeatAvailable) {
      resolve("Seat booked");
    } else {
      reject("Booking failed");
    }
  });
}

function makePayment() {
  return new Promise((resolve) => {
    resolve("Payment successful");
  });
}

bookTicket(true)
  .then((message) => {
    console.log(message);
    return makePayment();
  })
  .then((paymentMessage) => console.log(paymentMessage))
  .catch((error) => console.log(error));
