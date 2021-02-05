const Discord = require('discord.js')
module.exports = {
	name: 'kick',
	description: 'Kicks a user',
	aliases: ['kicks'],
	usage: '!kick <user>',
	cooldown: 1,
	execute(message, args, bot) {
if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I do not have the right permission: Kick Members')
if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You are not allowed to use this command: Kick Members')
            
            const member = message.mentions.members.first()
            if (!message.mentions.users.size) {
                return message.channel.send('You have to mention a user to kick!');
            } else if (member.id === message.author.id) {
                return message.channel.send('You can\'t kick yourself!');
            } else if (member.roles.highest.position > message.member.roles.highest.position) {
                return message.channel.send('That role is higher than your highest role, please try again')
            } else if (!member.kickable) {
                return message.channel.send('You cannot kick this user!');
            } 
            else if(member) {
                return member.kick().then(() => message.channel.send(`${member.user.tag} was kicked.`))
            }
 
	},
};