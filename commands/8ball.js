const Discord = require('discord.js')
module.exports = {
	name: '8ball',
	description: 'Play 8ball',
	aliases: ['magicball'],
	usage: '!8ball <question>',
	cooldown: 1,
	async execute(message, args, bot) {
    if (!args[1]) {
                return message.channel.send("Please ask a full question. |Usage: !8ball <question>")
            }
            let numbers = Math.floor(Math.random() * 8);

            if (numbers == 0) {
                return message.channel.send(':8ball: Yes, definitely')
            }
            if (numbers == 1) {
                return message.channel.send(':8ball: No, definitely not')
            }
            if (numbers == 2) {
                return message.channel.send(':8ball: Ask again later')
            }
            if (numbers == 3) {
                return message.channel.send(':8ball: It is uncertain')
            }
            if (numbers == 4) {
                return message.channel.send(':8ball: Odds are not in favour')
            }
            if (numbers == 5) {
                return message.channel.send(':8ball: Odds are in your favor')
            }
            if (numbers == 6) {
                return message.channel.send(':8ball: Thats a secret')
            }
            if (numbers == 7) {
                return message.channel.send(':8ball: Maybe.....')
            }
   

    
	
	},
};