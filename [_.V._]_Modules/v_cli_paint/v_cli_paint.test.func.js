var [  vCLIp_bright, vCLIp_dim, vCLIp_underscore, vCLIp_hidden, vCLIp_blink, vCLIp_reverse_color, vCLIp_green, vCLIp_red, vCLIp_blue ] = require('./v_cli_paint');


console.log('\n-----------------------------')
console.log("Normal Example Text");
console.log(vCLIp_bright("--<[ BRIGHT ]>-------------------"));

console.log(vCLIp_green("Normal GREEN text Example :::::::"));
console.log(vCLIp_green(vCLIp_bright("--<[ BRIGHT && GREEN ]>----------")));

console.log(vCLIp_red("Normal RED text Example :::::::"));
console.log(vCLIp_red(vCLIp_bright("--<[ BRIGHT && RED ]>----------")));

console.log(vCLIp_blue("Normal BLUE text Example :::::::"));
console.log(vCLIp_blue(vCLIp_bright("--<[ BRIGHT && BLUE ]>----------")));

console.log('\n-----------------------------\n')
console.log("Dimmed Example Text");
console.log(vCLIp_dim("--<[ DIM ]>-------------------"));

console.log(vCLIp_green("Normal GREEN text Example :::::::"));
console.log(vCLIp_dim(vCLIp_green("--<[ DIM && GREEN ]>----------")));

console.log(vCLIp_red("Normal RED text Example :::::::"));
console.log(vCLIp_dim(vCLIp_red("--<[ DIM && RED ]>----------")));

console.log(vCLIp_blue("Normal BLUE text Example :::::::"));
console.log(vCLIp_dim(vCLIp_blue("--<[ DIM && BLUE ]>----------")));

console.log('\n-----------------------------\n')
console.log("Underscored Example Text");
console.log(vCLIp_underscore("--<[ underscore ]>-------------------"));

console.log(vCLIp_green("Normal GREEN text Example :::::::"));
console.log(vCLIp_underscore(vCLIp_green("--<[ underscore && GREEN ]>----------")));

console.log(vCLIp_red("Normal RED text Example :::::::"));
console.log(vCLIp_underscore(vCLIp_red("--<[ underscore && RED ]>----------")));

console.log(vCLIp_blue("Normal BLUE text Example :::::::"));
console.log(vCLIp_underscore(vCLIp_blue("--<[ underscore && BLUE ]>----------")));


console.log('\n-----------------------------\n')
console.log("Hidden Example Text <[-DOES NOT WORK FOR UNCHECKED REASON-]> ");
console.log(vCLIp_hidden("--<[ Hidden ]>-------------------"));

console.log(vCLIp_green("Normal GREEN text Example :::::::"));
console.log(vCLIp_hidden(vCLIp_green("--<[ hidden && GREEN ]>----------")));

console.log(vCLIp_red("Normal RED text Example :::::::"));
console.log(vCLIp_red(vCLIp_hidden("--<[ hidden && RED ]>----------")));

console.log(vCLIp_blue("Normal BLUE text Example :::::::"));
console.log(vCLIp_blue(vCLIp_hidden("--<[ hidden && BLUE ]>----------")));







console.log('\n----[ expected FAILS after this line ]>-----------------\n')
console.log(vCLIp_red(vCLIp_blue("\n--<[ RED && BLUE ]>----------"))); // <--] NOTICE: Only last thing applied will be kept cuz of way style in CLI works. 
console.log(vCLIp_green(vCLIp_blue("--<[ GREEN && BLUE ]>----------"))); // [-OK-] : Expected to only work last one.






