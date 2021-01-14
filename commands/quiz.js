
const Discord = require('discord.js')
const GameCord = require('gamecord');
module.exports = {
	name: 'quiz',
	description:'Quiz Time!' ,
	aliases: ['quiz'],
	usage: '!quiz',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            new GameCord.Quiz(message)
                .on('end', game => console.log(`${game.message.author.tag}'s quiz game score was ${game.score}`)) // Start event also exists
                .run();
              
	},
};