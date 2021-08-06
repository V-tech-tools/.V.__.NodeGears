// Loading of the VatomCannon for LowLevel_Vatom_Testing-[per module]
// Hopefully gonna save bunch of time figuring out shitload of code... haha :D 
const VatomCannon = require('vatom_cannon')
//----------------------------------------------------------------

// Getting the actuall V_Math to use in the tests
const v_math = require('v_math')
//----------------------------------------------

// This is the test settings VatomCannon is going to use
const v_add_tests = {
	printAll: false,
	name: "v_add",  // Some name for output to have idea what's it testing.
	hint: "Add more man! Cover The Base Hill With Bodies If Needed...buahaha", // Limited Output to 36chars for the benefit of good look. :D 
	targetList: [{
		desc: "No input values [ ??? + ??? => ??? ]",
		pass: false,
		tested: false,
		test() {
			return v_add();
		},
		expected: "ERROR: Missing Params v_math.v_add(x,y)"
	},
	{
		desc: "Missing Second Input Variable [ 11 + missing => ??? ]",
		pass: false,
		tested: false,
		test() {
			return v_add(11);
		},
		expected: "ERROR: Missing Params v_math.v_add(x,y)"
	},
	{
		desc: "Input Variables Are OK [ 22 + 55 => 77]",
		pass: false,
		tested: false,
		test() {
			return v_add(22, 55);
		},
		expected: 77
	},
	{
		desc: "[TestFailing_DEMO] Input Variables Are OK {but expected is set to 771 \n| while we are doing same thing [ 22 + 55 = 77(1 <- example of human error ] as previous one only with mistake}",
		pass: false,
		tested: false,
		test() {
			return v_add(22, 55);
		},
		expected: 771,
		ignored: true
	},
	{
		desc: "Lets send it some text",
		pass: false,
		tested: false,
		test() {
			return v_add("22", 55);
		},
		expected: '2255'
	},
	{
		desc: "Calculation #1",
		pass: false,
		tested: false,
		test() {
			return v_add(918273, 645546);
		},
		expected: 1563819
	},
	{
		desc: "Calculation #2",
		pass: false,
		tested: false,
		test() {
			return v_add(15638193, 6255276);
		},
		expected: 21893469
	},
	{
		desc: "Calculation #3",
		pass: false,
		tested: false,
		test() {
			return v_add( 1144338800, 1597412583);
		},
		expected: 2741751383
	},
	{
		desc: "Calculation #4",
		pass: false,
		tested: false,
		test() {
			return v_add(5483502766, 16450508298);
		},
		expected: 21934011064
	},
	{
		desc: "Calculation #5",
		pass: false,
		tested: false,
		test() {
			return v_add(43868022128, 43868022128);
		},
		expected: 87736044256
	},
	{
		desc: "Calculation #6",
		pass: false,
		tested: false,
		test() {
			return v_add(21934011064, 21934011064);
		},
		expected: 43868022128
	},
	{
		desc: "Calculation #7",
		pass: false,
		tested: false,
		test() {
			return v_add(21934011064, 21934011064);
		},
		expected: 46553297840
	},
	{
		desc: "Calculation #8",
		pass: false,
		tested: false,
		test() {
			return v_add(1342637856, 1342637856);
		},
		expected: 2685275712
	},
	{
		desc: "Calculation #9",
		pass: false,
		tested: false,
		test() {
			return v_add(111225533, 1231412323);
		},
		expected: 1342637856
	}

	]
};
//------------------------------------------------------

// Just give it the list to go through
// Setup of constant for test result export
const v_test_res_add = VatomCannon(v_add_tests);
//------------------------------------------

// and the export of it.
module.exports = v_test_res_add;
//------------------------------
