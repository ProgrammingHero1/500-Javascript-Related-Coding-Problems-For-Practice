// Problem 5: array তে ফাঁকা জায়গা (undefined) আছে কিনা চেক কর। যদি থাকে বল “ফাঁকা জায়গা পাওয়া গেছে”।
let myArray = [1, 2, , 4];
if (myArray[2] === undefined) {
  console.log("ফাঁকা জায়গা পাওয়া গেছে");
} else {
  console.log("ফাঁকা জায়গা নেই");
}
