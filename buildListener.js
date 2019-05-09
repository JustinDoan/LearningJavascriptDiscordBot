const http = require('http')
const exec = require('child_process').exec;


http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        exec("git pull && node index.js")
    });

    res.end();
}).listen(8888);