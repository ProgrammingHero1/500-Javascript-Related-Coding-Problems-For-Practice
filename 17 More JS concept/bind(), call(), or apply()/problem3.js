const player1 = { name: "Lionel Messi" };
const player2 = { name: "Cristiano Ronaldo" };

function introduce() {
  console.log("I am " + this.name + ", the best player in the world.");
}

introduce.apply(player1); // Output: I am Lionel Messi, the best player in the world.
introduce.apply(player2); // Output: I am Cristiano Ronaldo, the best player in the world.
