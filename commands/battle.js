const Discord = require('discord.js')
const minigames = require('wideapi')
module.exports = {
	name: 'battle',
	description: 'Battle a user',
	aliases: ['startbattle', 'fight'],
	usage: '!battle <user>',
	cooldown: 1,
	execute(message, args, bot) {
    let member = message.mentions.members.first() 
    if(!member) return message.channel.send('Please mention a member you want to battle with!')
	   minigames.startBattle(member, message)
            

 
	},
};