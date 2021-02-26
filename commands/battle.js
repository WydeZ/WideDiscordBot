const Discord = require('discord.js')
const minigames = require('discord-minigames')
module.exports = {
	name: 'wbattle',
	description: 'Battle a user',
	aliases: ['startbattle'],
	usage: '!battle <user>',
	cooldown: 1,
	execute(message, args, bot) {
    let member = message.mentions.members.first() 
    if(!member) return message.channel.send('Please mention a member you want to battle with!')
	   minigames.startBattle(member, message)
            

 
	},
};