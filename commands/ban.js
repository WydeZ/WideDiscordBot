const Discord = require('discord.js')
module.exports = {
	name: 'ban',
	description: 'Bans a user',
	aliases: ['bans'],
	usage: '!ban <user>',
	cooldown: 1,
	execute(message, args, bot) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
     if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have the right permission: Ban Members')
 if (!message.member.hasPermission('BAN_MEMBERS')) return  message.channel.send('You are not allowed to use this command: Ban Members')
           

            if (!member) {
                return message.channel.send('You have to specify a user to ban via mention or ID! ');
            } else if (member.id === message.author.id) {
                return message.channel.send('You can\'t ban yourself!').catch((err) => {
                    message.channel.send('You cant ban yourself!')
                })
            } else if (member.roles.highest.position > message.member.roles.highest.position) {
                return message.channel.send('That role is higher than your highest role, please try again')
                }
	             else if(member){
                 member.ban().then(() => message.channel.send(`**${member.user.tag}** was banned.`))
               }
	
            

 
	},
};