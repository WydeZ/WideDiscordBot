const Discord = require('discord.js')
module.exports = {
	name: 'setnickname',
	description: 'Set a nickname for a person',
	aliases: ['sn'],
	usage: 'setnickname <user> <new-nickname>',
	cooldown: 1,
	execute(message, args, bot) {
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`I do not have the right permission: Manage Nickname`)
      if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You do not have permission to use this command: Manage Nicknames")
            const person = message.mentions.members.first() || message.guild.members.cache.get(args[1])
            if (!person) return message.channel.send('You need to specify a user via mentions or ID | Usage: !setnickname {user} {nickname}')
            let nicks = args.slice(2).join(" ")
            if (!nicks) return message.channel.send('What nickname do you want the user to be? | Usage: !setnickname {user} {nickname}')


            
if(message.mentions.members.first().roles.highest.position > message.member.roles.highest.position) return message.channel.send("Your highest role is lower than the mentioned user's role")
            if(!message.mentions.members.first().roles.highest.position > message.guild.members.resolve(bot.user).roles.highest.position) return message.channel.send("My highest role is lower than the mentioned user's role")

            if(nicks.length > 32) return message.channel.send('The nickname cannot be more than 32 characters')
            
            person.setNickname(nicks).then(() => {
                message.channel.send(`I have succesfully renamed the user`)
            }).catch((err) => {
                message.channel.send("I was unable to fulfill your request. (Bug Maybe? Report it using the bug command) Make sure I have the higher role than the mentioned user.")
            })
  
	
	},
};