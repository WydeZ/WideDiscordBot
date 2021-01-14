
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'remind',
	description:'Reminds about something in a specific time' ,
	aliases: ['reminder'],
	usage: '!remind <time> <thing>',
	cooldown: 1,
	execute(message, args, bot) {
    const person = message.author
            let reminder = args.slice(2).join(" ")
            if (reminder.length > 100) return messsage.channel.send('Your text is too long | Please keep it under 100 characters')
            if (!reminder) return message.reply('What do you want to be reminded of? | Usage !remind {time} {reminder}')
            const time = args[1]
            if (!time)
                return message.reply('What time? ex: !remind 10s idk | Usage: !remind {time} {reminder}');
            message.channel.send(`Sucess! You have a reminder of **${reminder}** in **${ms(ms(time))}**`).catch((_err) => {
                message.channel.send('I was not able to fulfill your request | Bug maybe? Do !bug')
            })
            setTimeout(function () {
                message.author.send(`${person}, You asked to be reminded of: **${reminder}**`).catch((err) => {
                    message.channel.send(`${person}, You asked to be reminded of: **${reminder}**`)
                })
            }, ms(time))         
	},
};