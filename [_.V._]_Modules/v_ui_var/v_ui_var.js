


var v_uid = require("v_uid");

//|======================================================|
//| _V_ Class Constructor with set and get functions     |
//|______________________________________________________|
//| <[ createTime :: timestamp ]>                        |
//| <: performance.now() || Date.now() in production :>  |
//| Desc: Basically this will be time of creation.       |
//|______________________________________________________|
//| <[ updateTime :: timestamp ]>                        |
//| <: performance.now() || Date.now() in production :>  |
//| Desc: Gets updated when setter is used. This marks   |
//|       when the value was last written into           |
//|______________________________________________________|
//| <] needUiUpdate :: Boolean [>                        |
//| <: Boolean in both cases...>> need update to ui? :>  |
//| Desc: This one is just faster status so it gets set  |
//|       to true when value of _V_ object has changed   |
//|       so it auto marks instead of constant checking  |
//|       if value changed, if ui update done, if...if.. |
//|______________________________________________________|
//| <[ uiUpdatedTime :: timestamp ]>                     |
//| <: performance.now() || Date.now() in production :>  |
//| Desc: Gets updated when uiPrint() funciton is used.  |
//|       **uiPrint() <- mark printed and used by system |
//|        to achieve similar results elsewhere          |
//|=============================================[_V_]====|

class _V_ {
    // Well Starter/init/const_______________
    constructor(value = null) {
        this.val = value;
        this.createTime = Date.now();
        this.updateTime = this.createTime;
        this.needUiUpdate = true;
        this.uiUpdatedTime = 0;
        this.uiUID= v_uid.generate();
    }
    // Getter_______________
    get value() {
        return this.val;
    }
    // And Setter_________________
    set value(value = null) {
        if (value != null) {
            if (this.val != value) {
                this.val = value;
                this.needUiUpdate = true;
            }
            this.updateTime = Date.now();
            return true;
        }
        return false;
    }

    // UI printing hookup
    uiPrint() {
        this.needUiUpdate = false;
        this.uiUpdatedTime = Date.now();
        return this.val;
    }
}
//--------------------------------[_V_]----

module.exports = [
    _V_,
]