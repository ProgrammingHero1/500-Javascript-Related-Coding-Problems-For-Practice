//16. একটা ফাংশন তৈরি কর যা বয়স নিবে। যদি বয়স না পাই, তাহলে ১৮ ধরে বয়স দেখাবে। `Arrow function` আর `template literals` ব্যবহার করে কাজটা করবি।
const userInfo = (age = 18) => console.log(`তোর বয়স: ${age}`);
userInfo();
