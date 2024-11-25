const team = {
  name: "Avengers",
  members: ["Iron Man", "Thor", "Hulk"],
  showMembers() {
    this.members.forEach((member) => {
      console.log(`${this.name} member: ${member}`);
    });
  },
};

team.showMembers();

//Solution: Arrow function এর this বাইরের স্কোপ থেকে আসে। এখানে this.name team অবজেক্টের name প্রপার্টি ধরে।
