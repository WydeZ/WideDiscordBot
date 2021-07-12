
const Discord = require('discord.js')
module.exports = {
	name: 'inverted',
	description:'Shows an image with the inverted filter' ,
	aliases: ['invert'],
	usage: 'inverted <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let Member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;

            if (!Member) return message.channel.send(`Invalid User, please try again`);

            let Embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(`https://some-random-api.ml/canvas/invert?avatar=${Member.user.displayAvatarURL({ format: "png" })}`)
                .setTimestamp();

            return message.channel.send(Embed);
       
         
          
	},
};