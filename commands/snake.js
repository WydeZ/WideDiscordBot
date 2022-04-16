const Discord = require('discord.js')
const { Snake } = require('discord-gamecord');
module.exports = {
	name: 'snake',
	description:'Play a classic game of snake!' ,
	aliases: ['snakegame'],
	usage: 'snake',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            new Snake({
      message: message,
      slash_command: false,
      embed: {
        title: 'Snake Game',
        color: '#5865F2',
        OverTitle: 'Game Over',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢' },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        right: '➡️',
        left: '⬅️',
      }
    }).startGame();
  }
});
   
              
	},
};