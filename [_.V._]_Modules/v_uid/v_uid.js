

module.exports = v_uid = {
    used_ids:[],
    exists(id){
        return (this.used_ids.indexOf(id)) ? true : false;
    },
    isUnique(id){ 
        return (this.used_ids.indexOf(id)) ? false : true;
    },
    generate(){
        var uid = Date.now();
        if (this.isUnique(uid)){
            console.log(uid);
            this.used_ids.push(uid);
            return uid;
        }
        
        console.log(uid);
        return false;
    }
};
