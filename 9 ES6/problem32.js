//32. কিছু সংখ্যার একটা অ্যারে থেকে প্রথম সংখ্যা আর বাকিগুলো `destructuring` করে আলাদা করাস।

const numberList = [3, 4, 5, 6];
const [firstItem, ...restItems] = numberList;
console.log("প্রথম:", firstItem, "বাকি:", restItems);
