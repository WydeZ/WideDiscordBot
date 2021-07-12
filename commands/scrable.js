var scrabble = require('scrabble');
const Discord = require('discord.js')
module.exports = {
	name: 'scrabble',
	description: 'Scrabble a word',
	aliases: ['scrb', 'scrab', 'unscrabble'],
	usage: 'scrabble <text>',
	cooldown: 1,
	execute(message, args, bot) {
     let arg = message.content.split(" ").slice(1).join(" ")
            if (!args[1]) return message.channel.send('What word do you want me to unscrabble?')
            let yes = scrabble(args[1])
          const embed = new Discord.MessageEmbed()
        .setTitle(`${yes.length} Words Found!`)
        .setDescription(yes.join(', '))
        .setColor('GREEN')
       
       message.channel.send(embed).catch((err) => {
         message.channel.send('I was unable to fulfill your request. | It could mean no words were found | Make sure you use alphabetical letters. | Bug Maybe? Report it using the bug command.')
       })
	
	},
};
