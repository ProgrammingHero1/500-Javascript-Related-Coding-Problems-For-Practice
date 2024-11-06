//5. তোর একটা কন্টাক্ট লিস্ট আছে যেখানে বন্ধুদের নাম আর ফোন নাম্বার আছে। এদের মধ্যে শুধু নাম আর নাম্বার `destructuring` করে আলাদা দেখাস।
const contact = { name: "তোর বন্ধু", phone: "০১২৩৪৫৬৭৮৯" };
const { name, phone } = contact;
console.log("নাম:", name, ", নাম্বার:", phone);
