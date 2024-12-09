//8. তোর তিনজন বন্ধুর উচ্চতা জানা আছে। একটা ফাংশন লিখ যেখানে এই তিনজনের উচ্চতা ইনপুট নিলে সবচেয়ে লম্বা বন্ধুর নাম বলবে।
function findTallestFriend(
  friend1,
  height1,
  friend2,
  height2,
  friend3,
  height3
) {
  let tallest = friend1;
  let maxHeight = height1;

  if (height2 > maxHeight) {
    tallest = friend2;
    maxHeight = height2;
  }

  if (height3 > maxHeight) {
    tallest = friend3;
    maxHeight = height3;
  }

  return `The tallest friend is: ${tallest} (${maxHeight} cm)`;
}

// Example usage:
const friendName1 = "Alif";
const height1 = 175;
const friendName2 = "Bakir";
const height2 = 180;
const friendName3 = "Chiran";
const height3 = 178;

const tallestFriend = findTallestFriend(
  friendName1,
  height1,
  friendName2,
  height2,
  friendName3,
  height3
);
console.log(tallestFriend);
