const user = { name: "Arman" };

const socialMedia = user?.profile?.socialMedia ?? { facebook: "Not linked" };
console.log(socialMedia);
