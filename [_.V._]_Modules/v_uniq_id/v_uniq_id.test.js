

VuniqID = {
    usedIDs : [],
    generate(){
        var uid = Date.now();
        this.usedIDs.push(uid);
        return uid;
    },
    exists(id){
        return (this.usedIDs.indexOf(id)) ? true : false;
    },
    isUnique(id){ 
        return (!this.exists(id)) ? true : false;
    }
};

module.exports = VuniqID;