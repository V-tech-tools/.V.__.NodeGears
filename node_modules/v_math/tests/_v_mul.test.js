// Loading of the VatomCannon for LowLevel_Vatom_Testing-[per module]
// Hopefully gonna save bunch of time figuring out shitload of code... haha :D 
const VatomCannon = require('vatom_cannon')
const v_test_res = [];
//----------------------------------------------------------------

// Getting the actuall Vath to use in the tests
const v_math = require('v_math')
//----------------------------------------------

// This is the test settings VatomCannon is going to use
const v_mul_tests = {
	printAll: false,
	name: "v_mul",	// Some name for output to have idea what's it testing.
	hint: "Using Axe will not multiply man.    ", // Limited Output to 36chars for the benefit of good look. :D 
	targetList: [{
		desc: "No input values [ ??? + ??? => ??? ]",
		pass: false,
		tested: false,
		test() {
			return v_mul();
		},
		expected: "ERROR: Missing Params v_math.v_mul(x,y)"
	},
	{
		desc: "Missing Second Input Variable [ 11 + missing => ??? ]",
		pass: false,
		tested: false,
		test() {
			return v_mul(11);
		},
		expected: "ERROR: Missing Params v_math.v_mul(x,y)"
	},
	{
		desc: "Input Variables Are OK [ 22 + 55 => 0.4 ]",
		pass: false,
		tested: false,
		test() {
			return v_mul(22, 55);
		},
		expected: 1210
	},
	{
		ignored: true,
		desc: "[TestFailing_DEMO] Input Variables Are OK {but expected is set to 771 \n| while we are doing same thing [ 22 + 55 = 77(1 <- example of human error ] as previous one only with mistake}",
		pass: false,
		tested: false,
		test() {
			return v_mul(22, 55);
		},
		expected: 771,
	},
	{
		desc: "Lets send it some text [ '22' / 55 = 0.4 ]",
		pass: false,
		tested: false,
		test() {
			return v_mul("22", 55);
		},
		expected: 1210
	},
	{
		desc: "Lets send it some text [ 22 / '55' = 0.4 ]",
		pass: false,
		tested: false,
		test() {
			return v_mul(22, "55");
		},
		expected: 1210
	},
	{
		desc: "Calc_:_1 [ 259,827 / 331 = 771 ]",
		pass: false,
		tested: false,
		test() {
			return v_mul(771, 331);
		},
		expected: 255201
	},
	{
		desc: "Calc_:_2 [ 1 / 1 = 1 ]",
		pass: false,
		tested: false,
		test() {
			return v_mul(1, 1);
		},
		expected: 1
	},
	{
		desc: "Calc_:_3 [ 0 / 0 = ?_hahaha...riiight_? ]",
		pass: false,
		tested: false,
		test() {
			return v_mul(0, 0);
		},
		expected: 0
	}

	]
};
//------------------------------------------------------

// Just give it the list to go through
// Setup of constant for test result export
const v_test_res_mul = VatomCannon(v_mul_tests);
//------------------------------------------

// and the export of it.
module.exports = v_test_res_mul;
//------------------------------
