notNull = (x = null, y = null) => {
	if ((x === null) || (y === null)) {
		return false;
	}
	return true;
}

module.exports = {
	v_add: v_add = (x = null, y = null) => {
		if (notNull(x, y)) {
			return (x + y);
		}
		return "ERROR: Missing Params vath.v_add(x,y)";
	},
	v_sub: v_sub = (x = null, y = null) => {
		if (notNull(x, y)) {
			return (x - y);
		}
		return "ERROR: Missing Params vath.v_sub(x,y)";
	},
	v_mul : v_mul = (x = null, y = null) => {
		if (notNull(x, y)) {
			return (x * y);
		}
		return "ERROR: Missing Params vath.v_mul(x,y)";
	},
	v_div : v_div = (x = null, y = null) => {
		if (notNull(x, y)) {
			return (x / y);
		}
		return "ERROR: Missing Params vath.v_div(x,y)";
	},

}