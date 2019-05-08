//This is the main controller for passing on the incoming command to our command list to eventually respond back to the message.
const ping = require('./ping')

module.exports = function(message) {
    //Ping command
    if (message.content === '!ping'){
        res = ping(message.content)
        message.channel.send(res);
    }
}