const map = require('through2-map')
     const http = require('http')
const server = http.createServer((req,res)=>{
        req.pipe(map((chunk)=>{
            return chunk.toString().toLocaleUpperCase()
         })).pipe(res)
})

server.listen(process.argv[2])

