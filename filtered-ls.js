const { log } = require('console');
const fs = require('fs');
const ext = process.argv[3];
fs.readdir(process.argv[2],(err,list)=>{
if(!err){
    list.filter(file => file.includes(`.${ext}`)).map(item => log(item))
}
});
