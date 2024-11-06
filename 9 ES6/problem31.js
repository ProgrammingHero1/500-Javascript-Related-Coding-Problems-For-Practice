//31. একটা লিস্ট তৈরি কর যেখানে প্রথম আইটেম আলাদা করে আর বাকিগুলো `rest` অপারেটর দিয়ে দেখাস।
const colors = ["লাল", "নীল", "সবুজ"];
const [firstColor, ...otherColors] = colors;
console.log("প্রথম:", firstColor, "বাকি:", otherColors);
