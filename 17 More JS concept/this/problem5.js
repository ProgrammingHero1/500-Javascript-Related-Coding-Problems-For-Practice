document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});

//Solution: ইভেন্ট হ্যান্ডলারে this সেই ইলিমেন্ট (এই ক্ষেত্রে <button> এলিমেন্ট) কে নির্দেশ করে যেটাতে ইভেন্ট ঘটেছে।
