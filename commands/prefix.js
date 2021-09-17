const { Database } = require("quick.replit");
const gdb = new Database(process.env.REPLIT_DB_URL)
const Discord = require('discord.js')
module.exports = {
	name: 'prefix',
	description:'Shows my prefix' ,
	aliases: ['prefixes'],
	usage: '!prefix',
	cooldown: 1,
	async execute(message, args, bot) {
          let prefix = await gdb.get(`prefix_${message.guild.id}`) || "!"
             if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')

    
  if(prefix === null) prefix = "!";
        const embed = new Discord.MessageEmbed()
            .setTitle("Prefix")
            .setDescription(`My Prefixes are:\n- ${prefix}\n- <@${bot.user.id}>`)
            .setFooter(`Type ${prefix}newprefix set <prefix> to change prefix | "${prefix}help" to get the list of commands `)
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor('RANDOM')
        message.channel.send(embed)
            
	},
};