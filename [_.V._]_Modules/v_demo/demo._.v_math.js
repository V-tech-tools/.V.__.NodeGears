const v_test_res_add = require('../v_math/tests/_v_add.test')
const v_test_res_sub = require('../v_math/tests/_v_sub.test')
const v_test_res_mul = require('../v_math/tests/_v_mul.test')
const v_test_res_div = require('../v_math/tests/_v_div.test')

if ((v_test_res_add.length + v_test_res_sub.length + v_test_res_mul.length + v_test_res_div.length) > 0) {
    console.log("SOME BUGS ARE FOUND");
} else {
    console.log("YEAAAA NOTHING TO REPORT!!! ALL PASSING!!!")
}
