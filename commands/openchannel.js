
const Discord = require('discord.js')
module.exports = {
	name: 'openchannel',
	description:'Makes the channel public (Visible to the public or a certain role)' ,
	aliases: ['opench'],
	usage: '!openchannel <role(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
const openrole = message.guild.roles.everyone
       if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have the right permisison: Manage Server")
        const rolelock = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if (!rolelock) {
            message.delete()
            message.channel.updateOverwrite(openrole, {"VIEW_CHANNEL": true }).then(() => {
                message.channel.send('Sucess! I have made the channel public').then(m => m.delete({ timeout: 3500 }))
            })




        } else if (rolelock) { message.delete()
        message.channel.updateOverwrite(rolelock, { "VIEW_CHANNEL": false})
        message.channel.send(`Sucess! I have made the channel public for the role `).then(m => m.delete({ timeout: 3500 }))
        }
            
	},
};