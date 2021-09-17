
const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'wide',
	description:'Makes an avatar W I D E' ,
	aliases: ['widened'],
	usage: 'wide <user(optional>',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
        if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        let person = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[1])
          let avatar = person.displayAvatarURL({ size: 4096 })
          
        let link = await fetch(`https://vacefron.nl/api/wide?image=${avatar}`)
        let embed = new Discord.MessageEmbed()
        .setImage(link.url)
        .setColor("ORANGE")

        message.channel.send(embed)

              
	},
};