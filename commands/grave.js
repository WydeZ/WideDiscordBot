const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'grave',
	description: 'Send an image with the grave effect',
	aliases: ['rip', 'oof'],
	usage: '!grave <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
   if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let Member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;

            if (!Member) return message.channel.send(`Invalid User, please try again`);

            let Embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL()}`)
                .setTimestamp();

            return message.channel.send(Embed);

    
	},
};