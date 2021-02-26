
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'prefix',
	description:'Shows my prefix' ,
	aliases: ['prefixes'],
	usage: '!prefix',
	cooldown: 1,
	async execute(message, args, bot) {
          let prefix = await db.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = "!";
        const embed = new Discord.MessageEmbed()
            .setTitle("Prefix")
            .setDescription(`My Prefixes are:\n- ${prefix}\n- <@${bot.user.id}>`)
            .setFooter(`Type ${prefix}help for more information`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor('RANDOM')
        message.channel.send(embed)
            
	},
};