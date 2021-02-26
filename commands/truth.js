
const Discord = require('discord.js')
const luhv = require('luhv');
module.exports = {
	name: 'truth',
	description:'Its like truth or dare' ,
	aliases: ['truths'],
	usage: '!truth',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
    luhv.truth(truth => {
       const embed = new Discord.MessageEmbed()
    .setTitle('Truth')
    .setDescription(truth)
       .setColor("RANDOM")
    message.channel.send(embed)
});     
     
          
	},
};