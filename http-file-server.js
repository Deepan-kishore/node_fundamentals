const http = require('http')
const fs = require('fs');
const { log } = require('console');
const server = http.createServer(function (req, res) {
    const src = fs.createReadStream(process.argv[3])

    src.pipe(res)

})
server.listen(process.argv[2])