ErrorTMP = (fName = null) => {
	return `ERROR: ${fName}() function missing parameter < $str >`
}

var Reset = "\x1b[0m";
var Bright = "\x1b[1m";
var Dim = "\x1b[2m";
var Underscore = "\x1b[4m";
var Blink = "\x1b[5m";
var Reverse = "\x1b[7m";
var Hidden = "\x1b[8m";

var FgBlack = "\x1b[30m";
var FgRed = "\x1b[31m";
var FgGreen = "\x1b[32m";
var FgYellow = "\x1b[33m";
var FgBlue = "\x1b[34m";
var FgMagenta = "\x1b[35m";
var FgCyan = "\x1b[36m";
var FgWhite = "\x1b[37m";

var BgBlack = "\x1b[40m";
var BgRed = "\x1b[41m";
var BgGreen = "\x1b[42m";
var BgYellow = "\x1b[43m";
var BgBlue = "\x1b[44m";
var BgMagenta = "\x1b[45m";
var BgCyan = "\x1b[46m";
var BgWhite = "\x1b[47m";

VnotNull = (str = null, fName = 'Missing_Function_Name') => {
	if (str === null) {
		return ErrorTMP(fName);
	}
	return true;
}

black_fg_paint = (str = null) => {
	return FgBlack + str + Reset
};
yellow_fg_paint = (str = null) => {
	return FgYellow + str + Reset
};
magenta_fg_paint = (str = null) => {
	return FgMagenta + str + Reset
};
cyan_fg_paint = (str = null) => {
	return FgCyan + str + Reset
};
white_fg_paint = (str = null) => {
	return FgWhite + str + Reset
};
//------------------------
green_fg_paint = (str = null) => {
	if (VnotNull(str, 'green_fg_paint')) {
		return FgGreen + str + Reset
	}
	return false;
};
red_fg_paint = (str = null) => {
	if (VnotNull(str, 'red_fg_paint')) {
		return FgRed + str + Reset
	}
	return false;
};
blue_fg_paint = (str = null) => {
	if (VnotNull(str, 'blue_fg_paint')) {
		return FgBlue + str + Reset
	}
	return false;
};
bright_paint = (str = null) => {
	if (VnotNull(str, 'bright_paint')) {
		return Bright + str + Reset
	}
	return false;
};
dim_paint = (str = null) => {
	if (VnotNull(str, 'dim_paint')) {
		return Dim + str + Reset
	}
	return false;
};
underscore_paint = (str = null) => {
	if (VnotNull(str, 'underscore_paint')) {
		return Underscore + str + Reset
	}
	return false;
};

blink_paint = (str = null) => {
	if (VnotNull(str, 'blink_paint')) {
		return Blink + str + Reset
	}
	return false;
};

reverse_paint = (str = null) => {
	if (VnotNull(str, 'reverse_paint')) {
		return Reverse + str + Reset
	}
	return false;
};

hidden_paint = (str = null) => {
	if (VnotNull(str, 'hidden_paint')) {
		return Hidden + str + Reset
	}
	return false;
};

	module.exports = [
		vCLIp_bright = (str = null) => {
			if (VnotNull(str, 'vCLIp_bright')) {
				return bright_paint(str);
			}
			return false;
		},
		vCLIp_dim = (str = null) => {
			if (VnotNull(str, 'vCLIp_dim')) {
				return dim_paint(str);
			}
			return false;
		},
		vCLIp_underscore = (str = null) => {
			if (VnotNull(str, 'vCLIp_underscore')) {
				return underscore_paint(str);
			}
			return false;
		},
		vCLIp_blink = (str = null) => {
			if (VnotNull(str, 'vCLIp_blink')) {
				return blink_paint(str);
			}
			return false;
		},
		vCLIp_reverse_color = (str = null) => {
			if (str === null) {
				return "ERROR: reverse() function missing parameter < $str > ";
			}
			return reverse_paint(str);
		},
		vCLIp_hidden = (str = null) => {
			if (VnotNull(str, 'vCLIp_hidden')) {
				return hidden_paint(str);
			}
			return false;
		},
		vCLIp_green = (str = null) => {
			if (VnotNull(str, 'vCLIp_green')) {
				return green_fg_paint(str);
			}
			return false;
		},
		vCLIp_red = (str = null) => {
			if (VnotNull(str, 'vCLIp_red')) {
				return red_fg_paint(str);
			}
			return false;
		},
		vCLIp_blue = (str = null) => {
			if (VnotNull(str, 'vCLIp_blue')) {
				return blue_fg_paint(str);
			}
			return false;
		},
	];

	
	const vCLIp = {
		bright(str = null) {
			if (VnotNull(str, 'vCLIp.bright')) {
				return bright_paint(str);
			}
			return false;
		},
		dim(str = null) {
			if (VnotNull(str, 'vCLIp.dim')) {
				return dim_paint(str);
			}
			return false;
		},
		underscore(str = null) {
			if (VnotNull(str, 'vCLIp.underscore')) {
				return underscore_paint(str);
			}
			return false;
		},
		blink(str = null) {
			if (VnotNull(str, 'vCLIp.blink')) {
				return blink_paint(str);
			}
			return false;
		},
		reverse_color(str = null) {
			if (VnotNull(str, 'vCLIp.reverse_color')) {
				return reverse_paint(str);
			}
			return false;
		},
		hidden(str = null) {
			if (VnotNull(str, 'vCLIp.hidden')) {
				return hidden_paint(str);
			}
			return false;
		},
		green(str = null) {
			if (VnotNull(str, 'vCLIp.green')) {
				return green_fg_paint(str);
			}
			return false;
		},
		red(str = null) {
			if (VnotNull(str, 'vCLIp.red')) {
				return red_fg_paint(str);
			}
			return false;
		},
		blue(str = null) {
			if (VnotNull(str, 'vCLIp.blue')) {
				return blue_fg_paint(str);
			}
			return false;
		}
	};
	
module.exports =	vCLIp;