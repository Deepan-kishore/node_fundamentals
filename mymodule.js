const fs = require('fs');
module.exports = (dirName, ext, filter ) =>{
    fs.readdir(dirName,(err,list)=>{
        if(err){
    return filter(err);
        }

        return filter(null, list.filter(file => file.includes(`.${ext}`)));
    } )
    };