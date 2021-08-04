//111111111
let v_uni = require("v_uni");

console.log("-[1-S]-[ v_uni ]<= Unicode Printing From Custom Node Module =>-------------------------------\n");
console.log(`=> v_uni.ok : ${v_uni.ok}`);
console.log(`=> v_uni.tu_o : ${v_uni.tu_o}`);
console.log(`=> v_uni.tx : ${v_uni.tx}`);
console.log(`=> v_uni.add : ${v_uni.add}`);
console.log(`=> v_uni.min : ${v_uni.min}`);
console.log(`=> v_uni.add : ${v_uni.add}`);
console.log(`=> v_uni.tt : ${v_uni.tt}`);
console.log("\n-[1-E]-[End]----------------------------------------------------------------------[End]-----\n\n\n");
//2222222222
console.log("-[2-S]-[ v_math ]<= getting v_math and logging the object =>---------------------------------\n");
let v_math = require("v_math");
console.log(v_math);
console.log("\n-[2-E]-[End]----------------------------------------------------------------------[End]-----\n\n\n"
);
//3333333333
console.log("-[3-S]-[ v_math ]<= calculations with some intentional error triggers =>----\n");
console.log(v_math.add());
console.log(v_math.add(99, 11));
console.log(v_math.div());
console.log(v_math.div(99, 11));
console.log(v_math.sub());
console.log(v_math.sub(99, 11));
console.log(v_math.mul());
console.log(v_math.mul(99, 11));
console.log("\n-[3-E]-[End]----------------------------------------------------------------------[End]-----\n\n\n");
//444444444
console.log("-[4-S]-[ v_uni + v_math  ]<= short if v_math.add, to print v_uni.ok or v_uni.name_block =>----------------\n");
console.log(v_math.add(99, 11) == 110 ? v_uni.ok + " Ok, 110." : v_uni.bomb + " Nope Bad Job" );
console.log(v_math.div(99, 9) == 11 ? v_uni.ok + " Yes it is. 11." : v_uni.bomb + " Nope Bad Job" );
console.log(v_math.mul(99, 11) == 1089 ? v_uni.ok + " Yes 1089." : v_uni.bomb + " Nope Bad Job" );
console.log(v_math.sub(99, 11) == 88 ? v_uni.ok + " Yup, 88." : v_uni.bomb + " Nope Bad Job" );
console.log(v_math.add(99, 11) == 77 ? v_uni.ok + " Ok, 110." : v_uni.bomb + " Nope, far from 77" );
console.log(v_math.div(99, 9) == 33 ? v_uni.ok + " Yes it is. 11." : v_uni.bomb + " Not 33." );
console.log(v_math.mul(99, 11) == 11 ? v_uni.ok + " Yes 1089." : v_uni.bomb + " No, surely not 11." );
console.log(v_math.sub(99, 11) == 124 ? v_uni.ok + " Yup, 88." : v_uni.bomb + " Nope it's not 124." );
console.log("\n-[4-E]-[End]----------------------------------------------------------------------[End]-----\n\n\n");
