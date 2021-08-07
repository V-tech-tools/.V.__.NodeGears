

v_uid = {
    used_ids : [],
    generate(){
        var uid = Date.now();
        this.used_ids.push(uid);
        return uid;
    },
    exists(id){
        return (this.used_ids.indexOf(id)) ? true : false;
    },
    isUnique(id){ 
        return (!this.exists(id)) ? true : false;
    }
};

module.exports = v_uid;