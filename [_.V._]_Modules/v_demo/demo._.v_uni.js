
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