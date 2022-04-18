const Discord = require('discord.js')
const Memer = require("random-jokes-api");
module.exports = {
	name: 'truth',
	description:`Generates a random truth! (It's like truth or dare)` ,
	aliases: ['truths'],
	usage: 'truth',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')

    const embed = new Discord.MessageEmbed()
    .setTitle('Truth')
    .setDescription(Memer.truth())
       .setColor("ORANGE")
    message.channel.send(embed)
             
	},
};