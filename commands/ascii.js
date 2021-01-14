
const Discord = require('discord.js')
const figlet = require('figlet');
module.exports = {
	name: 'ascii',
	description:'Turn the text into ascii' ,
	aliases: ['asci'],
	usage: '!ascii <text>',
	cooldown: 1,
		async execute(message, args, bot) {
     if (!args[1]) return message.channel.send('Please provide some text | Usage: !ascii <text>');
            msg = args[1]
            if (msg.length > 13) return message.channel.send('Your text is too long, the maximum character is 13')

            figlet.text(msg, function (err, data) {
                if (err) {
                    console.log('Something went wrong');
                    console.dir(err);
                }

                message.channel.send('```' + data + '```')
            })
          
         
          
	},
};