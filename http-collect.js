const http = require('http');

var ans = ''
http.get(process.argv[2],res=>{
    res.on("data",(res)=>{
        ans += res; 
    })
    res.on('end',()=>{

        console.log(ans.length);
        console.log(ans);
    })
    
})
