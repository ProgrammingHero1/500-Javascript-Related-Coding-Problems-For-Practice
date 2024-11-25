const obj = {
  name: "Hero",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

obj.regularFunction();
obj.arrowFunction();

//Solution:

//->regularFunction এর this অবজেক্ট obj কে নির্দেশ করে।
//->arrowFunction এর this বাইরের স্কোপ থেকে আসে, যেটা গ্লোবাল স্কোপ।
