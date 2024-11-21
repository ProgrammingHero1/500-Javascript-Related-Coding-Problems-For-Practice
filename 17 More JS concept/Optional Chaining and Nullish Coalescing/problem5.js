const user = { name: "Arif", contact: { phoneNumber: "01712345678" } };

function getUserInfo(user) {
  return user?.contact?.phoneNumber ?? "Phone number not available";
}

console.log(getUserInfo(user));
