//This is the main controller for passing on the incoming command to our command list to eventually respond back to the message.
const ping = require('./ping')
const repeat = require('./repeat')
const votes = require('./votes')
module.exports = function(message) {


    if (message.content.split(" ").length === 1) {
         //Single Commands, no arguments
    switch(message.content) {
        case '!ping': {
            message.channel.send(ping(message.content));
            break;
        }
        case '!votes': {
            votes().then((votes) =>{
                message.channel.send(votes)
            })
            
        }
    }
    } else {
        //Complex Commands, multiple arguments
    switch(message.content.split(" ")[0]) {
        case '!repeat': {
            message.channel.send(repeat(message.content));
            break;
        }
    }
    }
    
}