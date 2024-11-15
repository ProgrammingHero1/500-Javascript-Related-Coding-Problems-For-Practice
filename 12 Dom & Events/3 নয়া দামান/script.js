// Get the main content area
const contentArea = document.getElementById("content-area");

// Birds Section
const birdsSection = document.createElement("section");
const birdsHeading = document.createElement("h2");
birdsHeading.innerText = "Birds Section";
birdsSection.appendChild(birdsHeading);

const birdsList = document.createElement("ul");
["Parrot", "Sparrow", "Peacock"].forEach((bird) => {
  const birdItem = document.createElement("li");
  birdItem.innerText = bird;
  birdsList.appendChild(birdItem);
});
birdsSection.appendChild(birdsList);
contentArea.appendChild(birdsSection);

// Animals Section
const animalsSection = document.createElement("section");
const animalsHeading = document.createElement("h2");
animalsHeading.innerText = "Animals Section";
animalsSection.appendChild(animalsHeading);

const animalsList = document.createElement("ul");
["Lion", "Tiger", "Elephant"].forEach((animal) => {
  const animalItem = document.createElement("li");
  animalItem.innerText = animal;
  animalsList.appendChild(animalItem);
});
animalsSection.appendChild(animalsList);
contentArea.appendChild(animalsSection);

// Insects Section (Using Template String)
const insectsSection = document.createElement("section");
insectsSection.innerHTML = `
  <h2>Insects Section</h2>
  <ul>
    <li>Butterfly</li>
    <li>Bee</li>
    <li>Ant</li>
  </ul>
`;
contentArea.appendChild(insectsSection);
