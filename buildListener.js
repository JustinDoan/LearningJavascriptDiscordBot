const http = require('http')
const spawn = require('child_process').spawn;

let bot = "";
let git = "";
http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        if (bot !== "") {
            bot.kill();
        }
        git = spawn('git', ['pull'])
        git.on('close', (code) => {
            bot = spawn("node", ['index.js'])
          });
        
    });

    res.end();
}).listen(8888);