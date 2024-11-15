// Task 1: Greeting div-এর টেক্সট পরিবর্তন
const greetingDiv = document.getElementById("greeting");
greetingDiv.innerText = "Hello JavaScript!";

// Task 2: Places list-এর নির্দিষ্ট কাজ
const placesList = document.getElementById("places-list");
console.log(placesList);

const mustVisitPlaces = document.getElementsByClassName("must-visit");
for (const place of mustVisitPlaces) {
  console.log(place.innerText);

  // "Saint Martin" এর টেক্সট কালার লাল করা
  if (place.innerText === "Saint Martin") {
    place.style.color = "red";
  }
}

// Task 3: Sections container-এর নির্দিষ্ট কাজ
const pageTitle = document.querySelector("#page-title");
pageTitle.style.backgroundColor = "yellow";

const sections = document.querySelectorAll(".sections-container section");
for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.margin = "10px";
  section.style.padding = "5px";
  section.style.borderRadius = "5px";
}
