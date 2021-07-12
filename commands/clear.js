const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'clear',
	description: 'Clears the wanted amount of messages',
	aliases: ['cl', 'purge'],
	usage: 'clear <amount>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the right permission: Manage Messages ')
            const amount = args[1]
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command: Manage Messages')

            if (!amount) return message.reply('please provide an amount of messages for me to delete | Usage: clear <amount(number)>')
            if (isNaN(amount)) return message.channel.send('It needs to be a number')

            if (amount > 100) return message.reply(`You cannot clear more than 100 messages at once`)

            if (amount < 1) return message.reply(`You need to delete at least one message`)
            message.delete().then(() => {

            
            message.channel.bulkDelete(amount).catch((err) => {
                return message.channel.send(`Oh no, an error occurred: \`${err.message}\`.`)
            })
            }).then(() => {

                message.channel.send('Success!').then(m => m.delete({ timeout: 2000 }));

            }).catch((err) => {
                return message.channel.send(`Oh no, an error occurred: \`${err.message}\`.`)
            })
	},
};