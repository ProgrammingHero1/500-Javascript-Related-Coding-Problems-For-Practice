const user = {
  name: "Samiul",
  profile: { email: "samiul@example.com" },
};

const email = user?.profile?.email ?? "Email not available";
console.log(email);
