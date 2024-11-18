const jsonString = `{
    "company": "TechZone",
    "employees": [
      { "name": "Ali", "role": "Engineer" },
      { "name": "Ria", "role": "Designer" },
      { "name": "Sam", "role": "Manager" }
    ]
  }`;

// JSON থেকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর
const data = JSON.parse(jsonString);

// "employees" অ্যারের প্রতিটি কর্মীর "role" প্রিন্ট করা
data.employees.forEach((employee) => console.log(employee.role));
