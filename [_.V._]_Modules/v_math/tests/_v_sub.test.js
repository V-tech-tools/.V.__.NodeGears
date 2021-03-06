// Loading of the VatomCannon for LowLevel_Vatom_Testing-[per module]
// Hopefully gonna save bunch of time figuring out shitload of code... haha :D 
const VatomCannon = require('vatom_cannon')
const v_test_res = [];
//----------------------------------------------------------------

// Getting the actuall V_Math to use in the tests
const v_math = require('v_math')
//----------------------------------------------

// This is the test settings VatomCannon is going to use
const v_sub_tests = {
	printAll: false, // set to true to see exact results from testing
	name: "v_sub",	// Some name for output to have idea what's it testing.
	hint: "Removing all logic is not helpful.", // Limited Output to 36chars for the benefit of good look. :D 
	targetList: [
		{
			desc: "No input values [ ??? + ??? => ??? ]",
			pass: false,
			tested: false,
			test() {
				return v_sub();
			},
			expected: "ERROR: Missing Params v_math.v_sub(x,y)"
		},
		{
			desc: "Missing Second Input Variable [ 11 + missing => ??? ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(11);
			},
			expected: "ERROR: Missing Params v_math.v_sub(x,y)"
		},
		{
			desc: "Input Variables Are OK [ 22 + 55 => 0.4 ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(22, 55);
			},
			expected: -33
		},
		{
			ignored: true,
			desc: "[TestFailing_DEMO] Input Variables Are OK {but expected is set to 771 \n| while we are doing same thing [ 22 + 55 = 77(1 <- example of human error ] as previous one only with mistake}",
			pass: false,
			tested: false,
			test() {
				return v_sub(55, 22);
			},
			expected: 33,
		},
		{
			desc: "Lets send it some text [ 155 - (-755) = 910 ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(155, -755);
			},
			expected: 910
		},
		{
			desc: "Lets send it some text [ 22 - '55' = -33 ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(22, "55");
			},
			expected: -33
		},
		{
			desc: "Calc_:_1 [ 255201 - 123579 = 131622 ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(255201, 123579);
			},
			expected: 131622
		},
		{
			desc: "Calc_:_2 [ 1 - 1 = 1 ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(1, 1);
			},
			expected: 0
		},
		{
			desc: "Calc_:_3 [ 0 - 0 = 0 ]",
			pass: false,
			tested: false,
			test() {
				return v_sub(0, 0);
			},
			expected: 0
		}
	]
};
//------------------------------------------------------

// Just give it the list to go through
// Setup of constant for test result export
const v_test_res_sub = VatomCannon(v_sub_tests);
//------------------------------------------

// and the export of it.
module.exports = v_test_res_sub;
//------------------------------
