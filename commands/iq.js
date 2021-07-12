const Discord = require('discord.js')
module.exports = {
	name: 'iq',
	description: 'Shows how smart you are',
	aliases: ['howsmart'],
	usage: 'iq <user(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member


            if (!user) return message.channel.send('Please give a valid user. ')
            const iq = Math.floor(Math.random() * 226);
            const embed = new Discord.MessageEmbed()
                .setTitle(":brain: IQ Test:")
                .setDescription(`:bulb:   ${user}'s  **IQ is:**   \`${iq}\`  `)
                .setColor("RANDOM")
                .setThumbnail("https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy.gif")
                .setTimestamp()
            message.channel.send(embed);
 
	},
};