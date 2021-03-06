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
 
black_fg_paint = (str) => {
	return FgBlack + str + Reset;
};
yellow_fg_paint = (str) => {
    return FgYellow + str + Reset;
};
magenta_fg_paint = (str) => {
    return FgMagenta + str + Reset;
};
cyan_fg_paint = (str) => {
    return FgCyan + str + Reset;
};
white_fg_paint = (str) => {
    return FgWhite + str + Reset;
};
//------------------------
green_fg_paint = (str) => {
	return FgGreen + str + Reset;
};
red_fg_paint = (str) => {
    return FgRed + str + Reset;
};
blue_fg_paint = (str) => {
    return FgBlue + str + Reset;
};

bright_paint = (str) => {
    return Bright + str + Reset;
};

dim_paint = (str) => {
    return Dim + str + Reset;
};

underscore_paint = (str) => {
    return Underscore + str + Reset;
};

blink_paint = (str) => {
    return Blink + str + Reset;
};

reverse_paint = (str) => {
    return Reverse + str + Reset;
};

hidden_paint = (str) => {
    return Hidden + str + Reset;
};

module.exports = V_CLIp = {
    bright (str = null) {
        if (str === null) {
            return "ERROR: bright() function missing parameter < $str > ";
        }
        return bright_paint(str);
    },
    dim (str = null) {
        if (str === null) {
            return "ERROR: dim() function missing parameter < $str > ";
        }
        return dim_paint(str);
    },
    underscore (str = null) {
        if (str === null) {
            return "ERROR: underscore() function missing parameter < $str > ";
        }
        return underscore_paint(str);
    },
    blink (str = null) {
        if (str === null) {
            return "ERROR: blink() function missing parameter < $str > ";
        }
        return blink_paint(str);
    },
    reverse_color (str = null) {
        if (str === null) {
            return "ERROR: reverse() function missing parameter < $str > ";
        }
        return reverse_paint(str);
    },
    hidden (str = null) {
        if (str === null) {
            return "ERROR: hidden() function missing parameter < $str > ";
        }
        return hidden_paint(str);
    },
    green (str = null) {
        if (str === null) {
            return "ERROR: green() function missing parameter < $str > ";
        }
        return green_fg_paint(str);
    },
    red (str = null) {
        if (str === null) {
            return "ERROR: red() function missing parameter < $str > ";
        }
        return red_fg_paint(str);
    },
    blue (str = null) {
        if (str === null) {
            return "ERROR: blue() function missing parameter < $str > ";
        }
        return blue_fg_paint(str);
    }
	}