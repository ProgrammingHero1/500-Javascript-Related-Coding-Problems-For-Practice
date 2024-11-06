//24. বন্ধুদের একটা তালিকা তৈরি কর যেখানে প্রথম বন্ধুর নাম আলাদা করে আর বাকিদের নাম `rest` অপারেটর দিয়ে দেখাস।
const friendsList = ["রাহাত", "সুমন", "মারুফ"];
const [bestFriend, ...others] = friendsList;
console.log("সেরা বন্ধু:", bestFriend, "বাকি:", others);
