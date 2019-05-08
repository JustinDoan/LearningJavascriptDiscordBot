const Discord = require('discord.js');
const client = new Discord.Client();
const secret = require('./token')
const controller = require('./commands/commandController')
client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', message => {
    
    controller(message)
    
});

client.login(secret.token);