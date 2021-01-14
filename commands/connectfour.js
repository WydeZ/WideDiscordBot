
const Discord = require('discord.js')
const GameCord = require('gamecord');
module.exports = {
	name: 'connectfour',
	description:'Play a classic game of connect four!' ,
	aliases: ['connect-four'],
	usage: '!connectfour',
	cooldown: 1,
		async execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            new GameCord.ConnectFour(message)
                .on('end', game => console.log(`${game.message.author.tag}'s connectfour game score was ${game.score}`)) // Start event also exists
                .run()
   
              
	},
};