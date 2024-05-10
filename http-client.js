const http = require("http");
http.get(process.argv[2],res=>{
    res.setEncoding("utf-8").on("data",(res)=>{
        console.log(res);
    })
    
})