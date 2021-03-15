
const Discord = require('discord.js')
module.exports = {
	name: 'slowmode',
	description: 'Make the channel have slowmode' ,
	aliases: ['slow', 'sm'],
	usage: '!slowmode <number> | !slowmode off',
	cooldown: 1,
	execute(message, args, bot) {
     const slowchannel = message.mentions.channels.first()
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the right permission: Manage Messages')
            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You don't have the permission: ```MANAGE MESSAGES```")
            if (args[1] === "off") {
                return message.channel.setRateLimitPerUser(0).then(() => {
                    message.channel.send('I have succesfully turned off slowmode')
                })
            } else
                if (!args[1]) return message.channel.send('How many seconds do you want the slowmode to be?')
            if (!slowchannel) {
                let hi = args[1]
                if (isNaN(hi)) return message.channel.send('It needs to be a number')
                if (hi > 21600) return message.channel.send('It cannot be greater than 21600 seconds or 6 hours')
                if (hi < 0) return message.channel.send('It needs to be greater than 0')

                message.channel.setRateLimitPerUser(hi).catch((_err) => {
                    return message.channel.send('I was unable to fulfill our request | Try making the number a whole number | Bug maybe? Report it using the !bug command')
                })
                message.channel.send(`Success! I have made the slowmode to ${hi} seconds!`)


            } else {
                let oof = args.slice(2).join(" ")
                if (isNaN(oof)) return message.channel.send('It needs to be a number')
                if (oof > 21600) return message.channel.send('It cannot be greater than 21600 seconds or 6 hours')
                if (oof < 0) return message.channel.send('It needs to be greater than 0')
                slowchannel.setRateLimitPerUser(oof).catch((_err) => {
                    return message.channel.send('I was unable to fulfill our request || Try making the number a whole number || Bug maybe? Report it using the !bug command')
                })
                message.channel.send(`Success! I have made the slowmode to ${oof} seconds in ${slowchannel}`)
            }
     
        
              
	},
};