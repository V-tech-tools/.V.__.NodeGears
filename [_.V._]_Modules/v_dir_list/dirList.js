const fs = require("fs");
const dirList = (dirLoc) => {
	fs.readdir(dirLoc, (err, data) => {
		if (err) throw err;
		console.log(data);
	});
};
module.exports = {
	dirList: (dirLoc) => {
		dirList(dirLoc);
	}
}
