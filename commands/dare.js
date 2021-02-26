
const Discord = require('discord.js')
const luhv = require('luhv');
module.exports = {
	name: 'dare',
	description:'Its like truth or dare' ,
	aliases: ['dares'],
	usage: '!dare',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
    luhv.dare(dare => {
       const embed = new Discord.MessageEmbed()
    .setTitle('Dare')
    .setDescription(dare)
       .setColor("RANDOM")
    message.channel.send(embed)
});     
     
          
	},
};