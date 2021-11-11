
const Discord = require('discord.js')
module.exports = {
	name: 'privatechannel',
	description:'Makes the channel private (Not visible to the public)' ,
	aliases: ['privatech', "privch"],
	usage: 'privatechannel <role(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
     const openrole = message.guild.roles.everyone
       if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have the right permisison: Manage Server")

        const rolelock = message.guild.roles.cache.get(args[1]);
           const person = message.mentions.users.first()
        if (!args[1]) {
            message.delete()
            message.channel.updateOverwrite(openrole, { "VIEW_CHANNEL": false }).then(() => {
                message.channel.send('Sucess! I have privated the channel.\n\n**TIP**: Want to private the channel for a certain role/person? Just enter the role ID (only works if role id) or mention the person (only works if mention)').then(m => m.delete({ timeout: 5000 }))
            })
        } else if (rolelock) { message.delete()
        message.channel.updateOverwrite(rolelock, { "VIEW_CHANNEL": false })
        message.channel.send(`Sucess! I have privated the channel for the role.\n\n**TIP**: Want to private the channel for a certain role/person? Just enter the role ID (only works if role id) or mention the person (only works if mention)`).then(m => m.delete({ timeout: 5000 }))
        }
            else if (person) { message.delete()
        message.channel.updateOverwrite(person, { "VIEW_CHANNEL": false })
        message.channel.send(`Sucess! I have privated the channel for the person.\n\n**TIP**: Want to private the channel for a certain role/person? Just enter the role ID (only works if role id) or mention the person (only works if mention)`).then(m => m.delete({ timeout: 5000 }))
        }
  else return message.channel.send("Please specify by mentioning a user or by mentioning a role ID. Don't type anything if you wanna private the channel for everyone")
            
	},
};