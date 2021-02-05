const Discord = require('discord.js')
module.exports = {
	name: 'ban',
	description: 'Bnas a user',
	aliases: ['bans'],
	usage: '!ban <user>',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have the right permission: Ban Members')
 if (!message.member.hasPermission('BAN_MEMBERS')) return  message.channel.send('You are not allowed to use this command: Ban Members')
            if (message.channel.type === 'dm') {
                return message.reply('I can\'t execute that command inside DMs!');
            }
            const member = message.mentions.members.first()
            if (!message.mentions.users.size) {
                return message.channel.send('You have to mention a user to ban!');
            } else if (member.id === message.author.id) {
                return message.channel.send('You can\'t ban yourself!').catch((err) => {
                    message.channel.send('You cant ban yourself!')
                })
            } else if (member.roles.highest.position > message.member.roles.highest.position) {
                return message.channel.send('That role is higher than your highest role, please try again')
                }
	             else if(member){
                 member.ban().then(() => message.channel.send(`${member.user.tag} was banned.`))
               }
	
            

 
	},
};