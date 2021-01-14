
const Discord = require('discord.js')
const api = require('random-stuff-api')
module.exports = {
	name: 'joke',
	description:'Sends a random joke' ,
	aliases: ['dadjoke'],
	usage: '!joke',
	cooldown: 0,
		async execute(message, args, bot) {
        api.random.dadjoke().then(joke => {
                message.channel.send(joke)
            })      
	},
};