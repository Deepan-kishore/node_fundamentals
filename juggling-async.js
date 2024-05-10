const { log } = require('console');
const http = require('http');
const url = []
const call_fn = (n) =>http.get(process.argv[n],res=>{
    let ans = ''
    res.on("data",(res)=>{
        ans += res; 
    })
    res.on('end',()=>{
url[n-2] = ans;
if (!url.includes(undefined)) {
    url.map(item=>console.log(item))
}    })
    
})

const g = async() =>{
await call_fn(2)
await call_fn(3)
await call_fn(4)
}
g();
