const http = require('http')
const spawn = require('child_process').spawn;

let bot = "";
let git = "";
http.createServer(function (req, res) {
    req.on('end', function(chunk) {
        console.log('Got Push')
        if (bot !== "") {
            console.log('Killed Bot')
            bot.kill();
        }
        console.log('Started Git Pull')
        git = spawn('git', ['pull'])
        git.on('close', (code) => {
            console.log('Started Bot/Finished Git Pull')
            bot = spawn("node", ['index.js'])
          });
        
    });

    res.end();
}).listen(8888);