
const Discord = require('discord.js')
module.exports = {
	name: 'openchannel',
	description:'Makes the channel public (Visible to the public or a certain role)' ,
	aliases: ['opench'],
	usage: 'openchannel <role(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
const openrole = message.guild.roles.everyone
       if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have the right permisison: Manage Server")
       const rolelock = message.guild.roles.cache.get(args[1]);
        const person = message.mentions.users.first()
        if (!args[1]) {
            message.delete()
            message.channel.updateOverwrite(openrole, {"VIEW_CHANNEL": true }).then(() => {
                message.channel.send('Sucess! I have made the channel public.\n\n\n\n**TIP**: Want to open the channel for a certain role/person? Just enter the role ID (only works if role id) or mention the person (only works if mention)').then(m => m.delete({ timeout: 5000 }))
            })




        } else if (rolelock) { message.delete()
        message.channel.updateOverwrite(rolelock, { "VIEW_CHANNEL": true})
        message.channel.send(`Sucess! I have made the channel public for the role.\n\n**TIP**: Want to open the channel for a certain role/person? Just enter the role ID (only works if role id) or mention the person (only works if mention).`).then(m => m.delete({ timeout: 5000 }))
        }
         else if (person) { message.delete()
        message.channel.updateOverwrite(person, { "SEND_MESSAGES": false })
        message.channel.send(`Sucess! I have made the channel public for the person.\n\n**TIP**: Want to open the channel for a certain role/person? Just enter the role ID (only works if role id) or mention the person (only works if mention `).then(m => m.delete({ timeout: 5000 }))
        }
  else return message.channel.send("Please specify by mentioning a user or by mentioning a role ID. Don't type anything if you wanna lock the channel for everyone.")
            
	},
};