const user = {
  name: "Tina",
  address: { postalCode: 1234 },
};

const city = user?.address?.city ?? "City not available";
console.log(city);
