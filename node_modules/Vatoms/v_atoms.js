
function v_atom() {
	this.x = 0;
	this.getX = () => { return this.x; };
	this.setX = (x) => { this.x = x; };
	get = () => {
		return this.x
	}
}

var obj = new v_atom();

obj.getX();
console.log(obj.getX());    // <- Get value of x in v_atom
obj.setX(25);               // -> Set value of x in v_atom
console.log(obj.x);         // <- Get 
obj.x = 50;                 // -> Set
console.log(obj);           // <- Get
console.log(typeof obj);    // <- Get type of




const V_Atom = {
	'int': 10,
	'num': 55.11,
}
console.log(V_Atom);
module.exports = V_Atom;