//16. তুই বাঘ আর হাতির ওজন তুলনা করতে চাস। একটা ফাংশন লিখ যেখানে দুইটা পশুর ওজন ইনপুট নিলে বড়টা কোনটি বলে দিবে।
function compareAnimals(weightTiger, weightElephant) {
  if (weightTiger > weightElephant) {
    return "বাঘটি বেশি বড়।";
  } else if (weightElephant > weightTiger) {
    return "হাতিটি বেশি বড়।";
  } else {
    return "বাঘ এবং হাতির ওজন সমান।";
  }
}

// উদাহরণ ব্যবহার:
const tigerWeight = 200; // কেজিতে
const elephantWeight = 5000; // কেজিতে
const biggerAnimal = compareAnimals(tigerWeight, elephantWeight);
console.log(biggerAnimal);
