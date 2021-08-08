var genNumb = 25000;
var v_uid = require("v_uid");

var startTime = Date.now();

for (let i = 0; i < genNumb; i++) {
  v_uid.generate();
}

console.log("Asked for: " + genNumb);
console.log("Made uids: " + v_uid.used_ids.length);

var endTime = Date.now();
console.log("ExecTime: " + (endTime - startTime) / 1000 + "s");

//console.log(v_uid)

//console.log(v_uid.used_ids.indexOf(v_uid.used_ids[10]))
//console.log(v_uid.exists(v_uid.used_ids[10]))
//console.log(v_uid.isUnique(v_uid.used_ids[10]))
