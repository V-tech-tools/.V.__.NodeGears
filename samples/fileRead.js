fs = require("fs");
const fileRead = (file) => {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
};
module.exports = {
  fileRead: (file) => {
    fileRead(file);
  },
};

