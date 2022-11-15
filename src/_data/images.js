const fs = require("fs");
module.exports = function() {
    console.log("helloey");
    let imageNames = fs.readdirSync(process.cwd() + "/src/img");

    return imageNames;
  };