var Full_Tech_PASS = true;

let v_uni = require('v_uni')

console.log(v_uni);
var v_uniLength = 0;
for (const key in v_uni) {
	if (Object.hasOwnProperty.call(v_uni, key)) {
		const element = v_uni[key];
		console.log(key + " :> " + element)
		v_uniLength++
	}
}
console.log("Found V_Uni Icons: " + v_uniLength);
v_demo = () => {
	console.log(v_uni.error + " <=-< v_demo - Using [v_uni] >-=> " + v_uni.medal);
};

module.exports = v_demo;

if (v_uniLength < 243) {
    Full_Tech_PASS = false;
}
//---------------------------------

const v_test_res_add = require('../v_math/tests/_v_add.test')
const v_test_res_sub = require('../v_math/tests/_v_sub.test')
const v_test_res_mul = require('../v_math/tests/_v_mul.test')
const v_test_res_div = require('../v_math/tests/_v_div.test')

if ((v_test_res_add.length + v_test_res_sub.length + v_test_res_mul.length + v_test_res_div.length) > 0) {
    console.log("SOME BUGS ARE FOUND");
    Full_Tech_PASS = false;
} else {
    console.log("YEAAAA NOTHING TO REPORT!!! ALL PASSING!!!")
}


//---------------------------------


let V_ScreenPortsList = require('v_screenports');


V_ScreenPortsList.forEach(item => {
	console.log(item);
});

console.log("Number Of ViewPorts Found: " +V_ScreenPortsList.length)

if ( V_ScreenPortsList.length == 16) {
	console.log("[>- OK : Test Passing -<]")
} else {
	console.log("<]_!_[>- FAILED : Test NOT Passed -<]_!_[>")
    Full_Tech_PASS = false;
}

// Fail On Purpose to check it out. Just comment it out.
// Full_Tech_PASS = false;
//------------------------------------

if (Full_Tech_PASS){
    console.log("\n+=====================+======================+  \n|"+v_uni.tr_o+" "+v_uni.error+" FULL_TECH DEMO  |  Status "+v_uni.tr_b+" "+v_uni.ok+" OK "+v_uni.tl_b+"  "+v_uni.tl_o+" | \n+=====================+======================+  \n");
} else {
    console.log("\nShiieet...[_FAILED_]...  \\.(O.o)./ \n");
}