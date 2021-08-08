
const acceptChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
generateString=(length=6)=> {
    let result = '';
    const charactersLength = acceptChars.length;
    for ( let i = 0; i < length; i++ ) {
        result += acceptChars.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

//-[prefix demo as a static value]--------
const prefixVUID = 'vuid';
//-------------------------[_.V._]----

//-[v_uid object as constant]--------
const v_uid = {
    used_ids: [],
    exists: function(id){
        return (this.used_ids.indexOf(id) >= 0) ? true : false;
    },
    isUnique: function (id){ 
        return (!this.exists(id))
    },
    generate: function(){
        var uid = (Date.now()+"_"+generateString(8));
        if (this.isUnique(uid)){
            //console.log(uid);
            this.used_ids.push(uid);
            return true;
        }
        
        //console.log(this.used_ids);
        return false;
    },
};
//-------------------------[_.V._]----

module.exports = v_uid;