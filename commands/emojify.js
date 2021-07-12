
const Discord = require('discord.js')
const emoji = require('discord-emoji-convert');
module.exports = {
	name: 'emojify',
	description:'Emojifies the text' ,
	aliases: ['emojified'],
	usage: 'emojify <text>',
	cooldown: 1,
		async execute(message, args, bot) {
          var arg = message.content.split(" ").slice(1).join(" ")
        if (!arg) return message.channel.send('What do you want me to emojify? | Example Usage: emojify this is cool')
        if (arg > 90) return message.channel.send('Your text is too long | Please keep it under 90 characters')
        let emojis = emoji.convert(arg)
        message.channel.send(emojis).catch((_err) => {
            message.channel.send(arg)
        })
              
	},
};