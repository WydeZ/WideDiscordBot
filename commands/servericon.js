const Discord = require('discord.js')
module.exports = {
	name: 'servericon',
	description: 'Sends Image of the Server Icon',
	aliases: ['serverpfp', 'infoserver'],
	usage: '!servericon',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
       const embed = new Discord.MessageEmbed()
       .setTitle(`${message.guild.name}'s Server Icon`)
	.setImage(message.guild.iconURL({ dynamic: true, size: 4096} ))
  .setColor('ORANGE')
  message.channel.send(embed)
	},
};