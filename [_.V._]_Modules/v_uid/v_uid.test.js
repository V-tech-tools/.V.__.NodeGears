var v_uid = require('v_uid');

console.log(v_uid.generate());

for (let i = 0; i < 1000; i++) {
    console.log(v_uid.generate());
}

console.log(v_uid)

console.log(v_uid.used_ids.indexOf(v_uid.used_ids[10]))
console.log(v_uid.exists(v_uid.used_ids[10]))
console.log(v_uid.isUnique(v_uid.used_ids[10]))

console.log(v_uid.used_ids);