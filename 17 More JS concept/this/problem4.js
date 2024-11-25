class Gamer {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }

  showDetails() {
    console.log(`${this.username} has a score of ${this.score}`);
  }
}

const gamer = new Gamer("Shadow", 500);
gamer.showDetails();

//Solution: this ক্লাসের তৈরি হওয়া অবজেক্ট gamer কে নির্দেশ করছে।
