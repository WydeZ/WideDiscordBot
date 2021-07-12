
const Discord = require('discord.js')
const GameCord = require('gamecord');
module.exports = {
	name: 'snake',
	description:'Play a classic game of snake!' ,
	aliases: ['snakegame'],
	usage: 'snake',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            new GameCord.SnakeGame(message)
                .setTitle('Snake Game')
                .setColor('RANDOM')
                .setMaxTime(60000) // Always better to set max time because the default one is just 5s
                .on('end', game => console.log(`${game.message.author.tag}'s snake game score was ${game.score}`)) // Start event also exists
                .run()
   
              
	},
};