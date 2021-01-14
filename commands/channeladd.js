
const Discord = require('discord.js')
module.exports = {
	name: 'channeladd',
	description:'Makes the channel can be visible by the mentioned user' ,
	aliases: ['chadd'],
	usage: '!channeladd <user>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the right permission: Manage Roles')
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission to use this command: "Manage Roles')
            const person = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            if (!person) return message.channel.send('Who do you want to add in this channel? || Usage: !channeladd {member}')
            message.delete()
            message.channel.updateOverwrite(person, { "VIEW_CHANNEL": true }).then(() => {
                message.channel.send(`Sucess! I have opened the channel for ${person.user.tag}`).then(m => m.delete({ timeout: 3500 }));
            }).catch((err) => {
                message.channel.send('I was unable to fulfill your request. Bug Maybe? Report it using the !bug command')
            })

    
  

            
	},
};