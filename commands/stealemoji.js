
const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
module.exports = {
	name: 'stealemoji',
	description:'Steals a custom emoji then puts it in the server' ,
	aliases: ['steale'],
	usage: '!steale <emoji> <name(optional>',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send('I do not have the right permission: Manage Emojis')
        if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send('You do not have the right permission: Manage Emojis')
              const emoji = args[1];
        if (!emoji) return message.channel.send(`Please give me a valid custom emoji! | Usage: !stealemoji <emoji> <name>`);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
                }`;
            const name = args.slice(2).join(" ");
            try {
                const Added = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle(`Emoji Added!`)
                .setDescription(
                `Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
                    );
                await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
                )
                return message.channel.send(Added)
            } catch (err) {
            
                return message.channel.send(`An error has occured!\n\n**Possible Reasons:**\n\`\`\`- This server has reached the emojis limit\n- The bot doesn't have permissions.\n- The emojis size is too big.\`\`\``)
           
            }
        } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`**Please Give Me A Valid Emoji!**`);
            message.channel.send(
                `**You Can Use Normal Emoji Without Adding In Server!**`
            );
        }
    
              
	},
};