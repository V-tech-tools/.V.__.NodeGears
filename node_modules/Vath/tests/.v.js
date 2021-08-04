const v_test_res_add = require('./_v_add.test')
const v_test_res_sub = require('./_v_sub.test')
const v_test_res_mul = require('./_v_mul.test')
const v_test_res_div = require('./_v_div.test')

if ((v_test_res_add.length + v_test_res_sub.length + v_test_res_mul.length + v_test_res_div.length) > 0) {
    console.log("SOME BUGS ARE FOUND");
} else {
    console.log("YEAAAA NOTHING TO REPORT!!! ALL PASSING!!!")
}