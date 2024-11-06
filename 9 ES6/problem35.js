//35. গেমের একটা তালিকা থেকে প্রথম আর শেষ গেমের নাম `destructuring` করে দেখাস।const games = ["ফুটবল", "ক্রিকেট", "হকি"];

const games = ["ফুটবল", "ক্রিকেট", "হকি"];
const [firstGame, , lastGame] = games;
console.log("প্রথম গেম:", firstGame, "শেষ গেম:", lastGame);
