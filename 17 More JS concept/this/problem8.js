const obj = {
  name: "Example",
  show: () => {
    console.log(this.name);
  },
};

obj.show();

//Solution: Arrow function নিজের this তৈরি করে না; বরং এটি বাইরের this নেয়। এখানে বাইরের this গ্লোবাল স্কোপের this। গ্লোবাল স্কোপে name ডিফাইন করা নেই, তাই undefined।
