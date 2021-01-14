const Discord = require('discord.js')
module.exports = {
	name: 'howgay',
	description: 'How gay are you? Lets find out!',
	aliases: ['gayrate'],
	usage: '!howgay <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const user = message.mentions.members.first();
            const gay = Math.floor(Math.random() * 101);
            let Embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`gay r8 machine`)
                .setDescription(`${user ? "he is" : "you are"} **${gay}%** gay 🏳️‍🌈`)
            message.channel.send(Embed);
 

    },
}