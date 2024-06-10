// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let index in companyName) {
  reversedCompanyName = companyName[index] + reversedCompanyName;
}

console.log(reversedCompanyName);
