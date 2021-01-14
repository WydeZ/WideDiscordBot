
const Discord = require('discord.js')
const api = require('random-stuff-api')
module.exports = {
	name: 'insult',
	description:'Sends a random insult' ,
	aliases: ['insulting'],
	usage: '!insult',
	cooldown: 0,
	execute(message, args, bot) {
        api.random.insult().then(insult => {
                message.channel.send(insult)
            })      
	},
};