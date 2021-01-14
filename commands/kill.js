const Discord = require('discord.js')
module.exports = {
	name: 'kill',
	description: 'Kills the mentioned user (not real)',
	aliases: ['killing'],
	usage: '!kill <user>',
	cooldown: 1,
	execute(message, args, bot) {
     let user = message.mentions.users.first();
            if (!user) {
                return message.channel.send('Please mention who you are killing')
            }
            return message.channel.send(message.author.username + ' killed ' + user.username)
 
	},
};