const Discord = require('discord.js')
const Memer = require("random-jokes-api");
module.exports = {
	name: 'dare',
	description:'Generates a random dare! (It is like truth or dare)' ,
	aliases: ['dares'],
	usage: 'dare',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
         const embed = new Discord.MessageEmbed()
    .setTitle('Dare')
    .setDescription(Memer.dare())
       .setColor("ORANGE")
    message.channel.send(embed) 
                                           
	},
};