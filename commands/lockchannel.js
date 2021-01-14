
const Discord = require('discord.js')
module.exports = {
	name: 'lockchannel',
	description:'Makes the channel can be messages by everybody (or a role)' ,
	aliases: ['lockch'],
	usage: '!lockchannel <role(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
     const openrole = message.guild.roles.everyone
       if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have the right permisison: Manage Server")
        const rolelock = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if (!rolelock) {
            message.delete()
            message.channel.updateOverwrite(openrole, { "SEND_MESSAGES": false }).then(() => {
                message.channel.send('Sucess! I have locked the channel').then(m => m.delete({ timeout: 3500 }))
            })




        } else if (rolelock) { message.delete()
        message.channel.updateOverwrite(rolelock, { "SEND_MESSAGES": false })
        message.channel.send(`Sucess! I have locked the channel for the role `).then(m => m.delete({ timeout: 3500 }))
        }

            
	},
};