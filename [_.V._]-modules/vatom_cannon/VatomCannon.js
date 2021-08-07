var [ bright, dim, underscore, hidden, blink, reverse_color, green, red, blue ] = require('../v_cli_paint/v_cli_paint');
/////////////////////////////
VatomCannon = (VatomSchema) => {

	//=-<[ Variables Prep/Setting up ]>.__________________________
	var v_test_res = [];
	var numberOfIgnored = 0;
	var printAll = ((VatomSchema.printAll === true) ? true : false);
	var v_test_list = VatomSchema.targetList;

	for (let itemIndex in v_test_list) {
		let item = v_test_list[itemIndex];
		var ignoredItem = false;
		if (typeof item.ignored !== 'undefined') {
			if (item.ignored === true) {
				ignoredItem = true;
			}
		}

		if (!ignoredItem) {
			item.gotFromTest = item.test();
			var gotType = typeof item.gotFromTest;
			var expType = typeof item.expected;
			if ((item.gotFromTest === item.expected) && (gotType === expType)) {
				item.pass = true;
				item.tested = true;
			}

			if (isNaN(item.expected) === isNaN(item.gotFromTest)) {
				item.pass = true;
				item.tested = true;
			}
		}
	}

	if (printAll === true) {
		console.log('/================================================================\\');
		console.log('| PRINTING OBJECT [ v_test_list ]                                |');
		console.log('+----------------------------------------------------------------+');
		console.log(v_test_list);
		console.log('+----------------------------------------------------------------+');
		console.log('| END OF OBJECT [ v_test_list ]                                  |');
		console.log("\\===============================================================/");

	}


	v_test_list.forEach(item => {
		if (item.pass === false) {
			if (typeof item.ignored !== 'undefined') {
				if (item.ignored === true) {
					numberOfIgnored++;
					return false;
				}
			} 
			return v_test_res.push(item);
		}
	});

	const passedNumb = (v_test_list.length - (v_test_res.length + numberOfIgnored));

	var spacerHelp = (v_test_list.length > 99) ? '' : ((v_test_list.length < 10) ? '  ' : ' ');
	var spacerHelp2 = (passedNumb > 99) ? '' : ((passedNumb < 10) ? '  ' : ' ');
	var spacerHelp3 = (v_test_res.length > 99) ? '' : ((v_test_res.length < 10) ? '  ' : ' ');
	var spacerHelp4 = (numberOfIgnored > 99) ? '' : ((numberOfIgnored < 10) ? '  ' : ' ');


	console.log("  ╓┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╖")
	console.log('╔═╣ Result : ' + VatomSchema.name + '() ╠══════════════════╗')
	console.log("║ ╙┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛                  ║")
	console.log('║ Hint:                                 ║')
	console.log('║ ' + VatomSchema.hint.substring(0, 34) + ((VatomSchema.hint.length > 34) ? "..." : "   ") + ' ║')
	console.log('╟┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╢')
	console.log("╠═▷ Number of tests     : [ " + v_test_list.length + " ]" + spacerHelp + "       ║");
	console.log("╠═▷ Passing Tests Number: [ " + passedNumb + " ]" + spacerHelp2 + "       ║");
	console.log("╠═▷ Failed Tests        : [ " + v_test_res.length + " ]" + spacerHelp3 + "       ║");
	console.log("╠═▷ Ignored Tests       : [ " + numberOfIgnored + " ]" + spacerHelp4 + "       ║");
	console.log((v_test_res.length == 0) ? "║ ╔════════════════════╗                ║" : "║ ╔═════════════════════════╗           ║");
	console.log((v_test_res.length == 0) ? "╚═╣ ▶ STATUS : "+ bright(green("_OK_")) +"    ╠════════════════╝" : "╚═╣ ▶ WARNING : FAILED TEST ╠═══════════╝");
	console.log((v_test_res.length == 0) ? "  ╚════════════════════╝ " : "  ╚═════════════════════════╝ ");

	if (printAll === true) {
		v_test_res.forEach(item => {
			console.log('');
			console.log('/= Failing Test Results ===========================================\\');
			console.log(`| Expected [ type -> ${expType} || value -> ${item.expected} ]`);
			console.log('|----------------------------------------------------------------|');
			console.log(`| Resulted with [ type -> ${gotType} || value -> ${item.gotFromTest} ]`);
			console.log('|----------------------------------------------------------------|');
			console.log(`| Test Descr.: ${item.desc} `);
			console.log('\\===============================================================/');
		});

		console.log(v_test_list)

		console.log(v_test_res)
	}

	return v_test_res;
};

module.exports = VatomCannon;