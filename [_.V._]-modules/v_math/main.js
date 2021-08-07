var { v_add, v_sub, v_mul, v_div } = require('./operations/v_operations');

const v_math = {
	add(x,y){ 
		return v_add(x,y);
	}, 
	sub(x,y){ 
		return v_sub(x,y);
	}, 
	mul(x,y){ 
		return v_mul(x,y);
	}, 
	div(x,y){ 
		return v_div(x,y);
	}, 
};

module.exports = v_math;