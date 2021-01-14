
const Discord = require('discord.js')
module.exports = {
	name: 'channelremove',
	description:"Makes the channel can't be visible by the mentioned user" ,
	aliases: ['chremove'],
	usage: '!channelremove <user>',
	cooldown: 1,
	 	async execute(message, args, bot) {
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the right permission: Manage Roles')
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission to use this command: "Manage Roles')
            const person = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            if (!person) return message.channel.send('Who do you want to remove in this channel? || Usage: !channelremove {member}')
            message.delete()
            message.channel.updateOverwrite(person, { "VIEW_CHANNEL": false }).then(() => {
                message.channel.send(`Sucess! I have privated the channel for ${person.user.tag}`).then(m => m.delete({ timeout: 3500 }));
            }).catch((err) => {
                message.channel.send('I was unable to fulfill your request. Bug Maybe? Report it using the !bug command')
            })

   

    
  

            
	},
};