
const Discord = require('discord.js')
module.exports = {
	name: 'emojiinfo',
	description:'Sends information about the custom emoji' ,
	aliases: ['emoji'],
	usage: 'emojiinfo <custom emoji>',
	cooldown: 1,
		async execute(message, args, bot) {
  if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            if (!args[1] || !args[1].startsWith("<") || !args[1].endsWith(">") || !args[1].includes(":")) return message.channel.send(`Please Give A Valid **Custom** Emoji! | Usage: emoji <custom emoji>`);

            let Thinger = args[1].split(":");

            let Animated;
            if (Thinger[0] === "<a") {
                Animated = true;
            } else {
                Animated = false;
            };

            const Name = Thinger[1];
            const ID = Thinger[2].slice(0, -1);
            const Link = `https://cdn.discordapp.com/emojis/${ID}.${Animated ? "gif" : "png"}?v=1`;

            return message.channel.send(`Name: **${Name}**\nID: **${ID}**\nAnimated: ${Animated ? "**Yes**" : "**No**"}\nLink: ${Link}`);
	},
};