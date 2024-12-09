//16. তুই বাঘ আর হাতির ওজন তুলনা করতে চাস। একটা ফাংশন লিখ যেখানে দুইটা পশুর ওজন ইনপুট নিলে বড়টা কোনটি বলে দিবে।
function compareAnimals(weightTiger, weightElephant) {
  if (weightTiger > weightElephant) {
    return "The tiger is bigger.";
  } else if (weightElephant > weightTiger) {
    return "The elephant is bigger.";
  } else {
    return "The tiger and elephant weigh the same.";
  }
}

// Example usage:
const tigerWeight = 200; // in kilograms
const elephantWeight = 5000; // in kilograms
const biggerAnimal = compareAnimals(tigerWeight, elephantWeight);
console.log(biggerAnimal);
