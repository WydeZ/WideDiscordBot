const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'channeldelete',
	description: 'Deletes a channel (With confirmation)',
	aliases: ['deletechannel', 'chdel', 'delch', 'channeldel','deletech'],
	usage: 'channeldelete',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have permission to use this command: MANAGE_CHANNELS')
        let filter = m => m.author.id === message.author.id
        message.channel.send('Are you sure you want to delete this channel? **(Yes | No)**')
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
        })
            .then(message => {
                message = message.first()
                if (message.content.toLowerCase() == 'yes' || message.content.toUpperCase() == 'y') {
                    return message.channel.delete()
                } else if (message.content.toLowerCase() == 'no' || message.content.toLowerCase() == 'n') {
                    return message.channel.send("**Command Cancelled ✅**")
                } else {
                    return message.channel.send(`Invalid Response, please try again`)
                }
            })
            .catch(collected => {
                message.channel.send('You took too long! Please try again');
            });
   
	},
};