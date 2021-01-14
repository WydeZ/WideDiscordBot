const Discord = require('discord.js')
module.exports = {
	name: 'say',
	description: 'The bot will say something you choose',
	aliases: ['speak'],
	usage: '!say <text>',
	cooldown: 1,
	execute(message, args, bot) {
     let arg = message.content.split(" ").slice(1).join(" ")
            const newMessage = arg.replace(/<@[!&]?\d+>/, '[mention]')
            if (!args[1]) return message.channel.send('What do you want me to say?')
            let baby = ['@everyone', '@here']
            for (var i = 0; i < baby.length; i++) {
                if (arg.includes(baby[i])) return message.channel.send('I cannot ping everyone or here')

            }

            return message.channel.send(`${newMessage}\n\n-**${message.author.tag}**`)
	
	},
};