const user = { name: "Sami", getDetails: () => "User Details" };

const details = user?.getDetails?.();
console.log(details ?? "No function available");
