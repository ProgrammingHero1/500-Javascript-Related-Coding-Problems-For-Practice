const user = {
  name: "Rahim",
  settings: {
    theme: "dark",
  },
};

const preferredLanguage = user?.settings?.preferredLanguage ?? "English";
console.log(preferredLanguage);
