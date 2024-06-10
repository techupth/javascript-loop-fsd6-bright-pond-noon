// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here

for (let i = 0; i < companyName.length; i++) {
  console.log(
    "Number" + " " + (i + 1) + " " + "character is " + companyName[i]
  );
}

for (let index in companyName) {
  console.log(
    "Number" +
      " " +
      (parseInt(index) + 1) +
      " " +
      "character" +
      " " +
      companyName[index]
  );
}
