const http = require('http')
const spawn = require('child_process').spawn;

let bot = "";
http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        if (bot) {
            bot.kill();
        }
        bot = spawn("git pull && node index.js")
    });

    res.end();
}).listen(8888);