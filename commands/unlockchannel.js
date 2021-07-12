
const Discord = require('discord.js')
module.exports = {
	name: 'unlockchannel',
	description:'Makes the channel can be messages by everybody (or a role) (' ,
	aliases: ['unlockch'],
	usage: 'unlockchannel <role(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
const openrole = message.guild.roles.everyone
       if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have the right permisison: Manage Server")
      const rolelock = message.guild.roles.cache.get(args[1]);
           const person = message.mentions.users.first()
        if (!args[1]) {
            message.delete()
            message.channel.updateOverwrite(openrole, { "SEND_MESSAGES": true }).then(() => {
                message.channel.send('Sucess! I have unlocked the channel.').then(m => m.delete({ timeout: 3500 }))
            })
        } else if (rolelock) { message.delete()
        message.channel.updateOverwrite(rolelock, { "SEND_MESSAGES": true })
        message.channel.send(`Sucess! I have unlocked the channel for the role.`).then(m => m.delete({ timeout: 3500 }))
        }

	},
};