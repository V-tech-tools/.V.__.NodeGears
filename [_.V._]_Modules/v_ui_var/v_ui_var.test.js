const { PerformanceObserver, performance } = require('perf_hooks');
const [ _V_ ] = require('./v_ui_var')

const dev = false;
const printAll = false;


//-<[ V_Performance  ]>._________________________________________
let v_perf = {
    log: [
        {
            name: "start_of_the_app",
            desc:
                "this one gets made first as a result of setting up dev to see and work propertly",
            timestamp: performance.now()
        }
    ],

    new(perfName = null, perfDesc = null) {
        if (
            this.log.push({
                name: perfName,
                desc: perfDesc,
                timestamp: performance.now()
            })
        ) {
            return true;
        }
        return false;
    }
};
//--------------------------------------------[_V_]----|


//-<[ MisingParams( list of params that you miss )---<_ it fills rest with same block for report.----|
missingParam = (paramList = null) => {
    if (paramList === null) {
        paramList = "paramList";
    }

    return {
        type: ERROR,
        subinfo: "MissingFunctionParams",
        params: JSON.stringify(paramList)
    };
};
//--------------------------------------------[_V_]----|


//-<[ SEoF will actually do the work of the SoF and EoF ]>-.____
SEoF = (secType = null, funcName = null) => {
    if (secType === null || funcName === null) {
        return missingParam(["secType", "funcName"]);
    }
    var result =
        secType.toLowerCase() == "sof"
            ? `<[SoF]> _V_ -> ${funcName}... <[SoF]>`
            : `<[EoF]> _V_ -> ${funcName}... <[EoF]>`;
    return result;
};
//--------------------------------------------[_V_]----|


//=-<[ Start_of_Function  ]>.__________________________
SoF_V_ = (funcName = null) => {
    if (funcName === null) {
        return {
            type: ERROR,
            subinfo: "MissingFunctionParams",
            params: ["funcName"]
        };
    }
    return SEoF("sof", funcName);
};
//-> Easier to remember name [ SOF(-funcName-) ][_V_]
SOF = (name) => {
    return dev ? console.log(SoF_V_(name)) : false;
};
//--------------------------------------------[_V_]----|


//=-<[ End_of_Function ]>._____________________________.
EoF_V_ = (funcName = null) => {
    if (funcName === null) {
        return missingParam(["secType", "funcName"]);
    }
    return SEoF("eof", funcName);
};
//-> Easier to remember name [ EOF(-funcName-) ][_V_]
EOF = (name) => {
    return dev ? console.log(EoF_V_(name)) : false;
};
//--------------------------------------------[_V_]----|


//-<[ DEMO ]>._________
dev_MaybePrint = (DemoUseNumber) => {
    if (dev && printAll) console.log(DemoUseNumber);
    if (dev && printAll) console.log(DemoUseNumber.value);
};
let DemoUseNumber = new _V_();
let DemoUseList = [];
//----DEMO----------------------------[_V_]----

//-<[ 500K_V_ ]>.________________________
v_perf.new("500k_numberToGen","Well Here we are using it to generate 500k of those and get how much time it takes to do it.");
const numberToGen = 15000;
for (var i = 0; i < numberToGen; i++) {
    var DemoNum = new _V_(i);
}
v_perf.new("500k_numberToGen_E", "End Of this measure _V_()  ....");

var Hlen  = v_perf.log.length - 1;
var Hlen2 = v_perf.log.length - 2;
//var ttISV = Math.trunc( ( ( ( v_perf.log[Hlen].timestamp - v_perf.log[Hlen2].timestamp ) * 1000 ) / numberToGen ) * 10 ) / 10 ;
//var ttISV = ( ( ( v_perf.log[Hlen].timestamp - v_perf.log[Hlen2].timestamp ) * 1000 ) / numberToGen );
var execTime = ( v_perf.log[Hlen].timestamp - v_perf.log[Hlen2].timestamp );
var ttISV = ( execTime / numberToGen );

console.info({'avgVarInitTime_V_' : ttISV+"µs" , 'numberToGen': numberToGen, 'execTime': execTime});
//----500K_V_---------------------------[_V_]----

//-<[ 500K_DEFAULT ]>.________________________
v_perf.new("500K_DEFAULT","Well Here we are using it to generate 500k of 500K_DEFAULT");

for (var i = 0; i < numberToGen; i++) {
    var itemH = {
        name: "John Doe",
        desc: "Volvoeeeeeeeeeeee",
        timeV: Date.now(),
        updtUI: false,
        timeUI: 0
    };
}

v_perf.new("500K_DEFAULT_E", "End Of this measure 500K_DEFAULT  ....");

var HlenD = v_perf.log.length - 1;
var Hlen2D = v_perf.log.length - 2;
var execTimeD = ( v_perf.log[HlenD].timestamp - v_perf.log[Hlen2D].timestamp );
var ttISVD = ( execTimeD / numberToGen );
console.info({'avgVarInitTimeDefault' : ttISVD+"µs" , 'numberToGen': numberToGen, 'execTimeD': execTimeD});

var execDIFF = execTimeD - execTime;
console.log('\n ExecTime_Delta [ '+ Math.trunc(execDIFF) +'ms ] -- [ 25-30mil. operations ] \n-> <default> - [_V_] = '+ Math.trunc(execDIFF) +'ms \n\n-<[ NOTE: If it goes to negative that means _V_ class is getting slower ]>-- \n');
console.info(v_perf.log);
//---500K_DEFAULT-----------------------[_V_]----

dev_MaybePrint(DemoUseNumber);

setTimeout(() => {
    DemoUseNumber.value = 55;
    dev_MaybePrint(DemoUseNumber);
    DemoUseNumber.uiPrint();

    //---TESTING v_perf -----------
    //console.info(v_perf.log);

    setTimeout(() => {
        DemoUseNumber.value += 55;
        dev_MaybePrint(DemoUseNumber);
        DemoUseNumber.uiPrint();
        dev_MaybePrint(DemoUseNumber);

        //---TESTING v_perf -----------
        //console.info(v_perf.log);
    }, 1);
}, 1);

//---TESTING v_perf -----------
//console.info(v_perf.log);

//---Performace----

v_perf.new(
    "end_of_main_file",
    "Basically this is last line in here...sooo...."
);




////ADDIONALL OLD DEBUGGING VERIONS------------------




/*---------------------------------------
if (dev) {
    class _V_ {
        constructor(value = null) {
            SOF("constructor");
            this.val = value;
            this.createTime = Date.now();
            this.updateTime = this.createTime;
            this.needUiUpdate = true;
            this.uiUpdatedTime = 0;
            EOF("constructor");
        }
        get value() {
            if (dev && printAll) console.log(SoF_V_("GET value()"));
            return this.val;
            if (dev && printAll) console.log(EoF_V_("GET value()"));
        }

        set value(value = null) {
            if (dev && printAll) console.log(SoF_V_("SET value()"));
            if (value != null) {
                if (this.val != value) {
                    this.val = value;
                    this.needUiUpdate = true;
                }
                this.updateTime = Date.now();
                if (dev && printAll) console.log(EoF_V_("SET value()"));
                return true;
            }
            if (dev && printAll) console.log(EoF_V_("SET value()"));
            return false;
        }

        uiPrint() {
            if (dev && printAll) console.log(SoF_V_("uiPrint()"));
            this.needUiUpdate = false;
            this.uiUpdatedTime = Date.now();
            if (dev && printAll) console.log(EoF_V_("uiPrint()"));
            return this.val;
        }
    }
}
--------------------------------------------------------*/