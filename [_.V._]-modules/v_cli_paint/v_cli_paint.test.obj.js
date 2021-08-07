let vCLIp = require('./v_cli_paint');

console.log(vCLIp);

console.log('\n-----------------------------')
console.log("Normal Example Text");
console.log(vCLIp.bright("--<[ vCLIp.bright ]>-------------------"));

console.log(vCLIp.green("Normal vCLIp.green text Example :::::::"));
console.log(vCLIp.green(vCLIp.bright("--<[ vCLIp.bright && vCLIp.green ]>----------")));

console.log(vCLIp.red("Normal vCLIp.red text Example :::::::"));
console.log(vCLIp.red(vCLIp.bright("--<[ vCLIp.bright && vCLIp.red ]>----------")));

console.log(vCLIp.blue("Normal vCLIp.blue text Example :::::::"));
console.log(vCLIp.blue(vCLIp.bright("--<[ vCLIp.bright && vCLIp.blue ]>----------")));

console.log('\n-----------------------------\n')
console.log("vCLIp.dimmed Example Text");
console.log(vCLIp.dim("--<[ vCLIp.dim ]>-------------------"));

console.log(vCLIp.green("Normal vCLIp.green text Example :::::::"));
console.log(vCLIp.dim(vCLIp.green("--<[ vCLIp.dim && vCLIp.green ]>----------")));

console.log(vCLIp.red("Normal vCLIp.red text Example :::::::"));
console.log(vCLIp.dim(vCLIp.red("--<[ vCLIp.dim && vCLIp.red ]>----------")));

console.log(vCLIp.blue("Normal vCLIp.blue text Example :::::::"));
console.log(vCLIp.dim(vCLIp.blue("--<[ vCLIp.dim && vCLIp.blue ]>----------")));

console.log('\n-----------------------------\n')
console.log("UnderscovCLIp.red Example Text");
console.log(vCLIp.underscore("--<[ vCLIp.underscore ]>-------------------"));

console.log(vCLIp.green("Normal vCLIp.green text Example :::::::"));
console.log(vCLIp.underscore(vCLIp.green("--<[ vCLIp.underscore && vCLIp.green ]>----------")));

console.log(vCLIp.red("Normal vCLIp.red text Example :::::::"));
console.log(vCLIp.underscore(vCLIp.red("--<[ vCLIp.underscore && vCLIp.red ]>----------")));

console.log(vCLIp.blue("Normal vCLIp.blue text Example :::::::"));
console.log(vCLIp.underscore(vCLIp.blue("--<[ vCLIp.underscore && vCLIp.blue ]>----------")));


console.log('\n-----------------------------\n')
console.log("vCLIp.hidden Example Text <[-DOES NOT WORK FOR UNCHECKED REASON-]> ");
console.log(vCLIp.hidden("--<[ vCLIp.hidden ]>-------------------"));

console.log(vCLIp.green("Normal vCLIp.green text Example :::::::"));
console.log(vCLIp.hidden(vCLIp.green("--<[ vCLIp.hidden && vCLIp.green ]>----------")));

console.log(vCLIp.red("Normal vCLIp.red text Example :::::::"));
console.log(vCLIp.red(vCLIp.hidden("--<[ vCLIp.hidden && vCLIp.red ]>----------")));

console.log(vCLIp.blue("Normal vCLIp.blue text Example :::::::"));
console.log(vCLIp.blue(vCLIp.hidden("--<[ vCLIp.hidden && vCLIp.blue ]>----------")));







console.log('\n----[ expected FAILS after this line ]>-----------------\n')
console.log(vCLIp.red(vCLIp.blue("\n--<[ vCLIp.red && vCLIp.blue ]>----------"))); // <--] NOTICE: Only last thing applied will be kept cuz of way style in CLI works. 
console.log(vCLIp.green(vCLIp.blue("--<[ vCLIp.green && vCLIp.blue ]>----------"))); // [-OK-] : Expected to only work last one.








