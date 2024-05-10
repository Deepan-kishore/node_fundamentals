const { log } = require("console")
const fs = require("fs")
const readFile = fs.readFile(process.argv[2],"utf-8",(err,data)=>{
    if(!err){
        console.log(data.split("\n").length -1)
        return data
    }
})
// readFile.then(res => console.log(res))