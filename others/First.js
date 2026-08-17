console.log("Learning Node JS");

const fs = require("fs");

fs.writeFile("output.txt", "i am Subhas Biswas", (err) => {
  if (err) console.log("Error Occured !");
  else console.log("File Written Successfully !");
});
