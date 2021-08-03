fs = require("fs");
const fileSave = (fileLoc, fileContent) => {
    //fs.writeFile("/etc/doesntexist", "abc", function (err, data) {
    fs.writeFile(fileLoc, fileContent, function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
};
module.exports = {
  fileSave: (fileLoc, fileContent) => {
    fileSave(fileLoc, fileContent);
  },
};
