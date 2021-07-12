const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'nuke',
	description: 'Nukes a channel (Deletes the channel then making the same channel with the same posiiton and permission)',
	aliases: ['nukes'],
	usage: 'nuke',
	cooldown: 1,
	execute(message, args, bot) {
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('I do not have the right permission: Manage Server')
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You do not have permission to use this command: Manage Server')
            let filter = m => m.author.id === message.author.id
            message.channel.send('Are you sure you want to nuke this channel? **(Yes | No)**')
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
            })
                .then(message => {
                    message = message.first()
                    if (message.content.toLowerCase() == 'yes' || message.content.toUpperCase() == 'y') {
                        let channel = bot.channels.cache.get(message.channel.id)
                        let posisi = channel.position
                        channel.clone().then((channel2) => {
                            channel2.setPosition(posisi)
                            channel.delete()
                            channel2.send("**This Channel has Been Nuked!** https://imgur.com/LIyGeCR")
                        })
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