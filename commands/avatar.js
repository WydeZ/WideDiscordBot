
const Discord = require('discord.js')
module.exports = {
	name: 'avatar',
	description:'Get the avatar URL of the tagged user(s), or your own avatar.' ,
	aliases: ['icon', 'av'],
	usage: '!avatar <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
           if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let person = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[1])
            const avatarembed = new Discord.MessageEmbed()
                .setTitle(`${person.tag}'s avatar`)
                .setURL(
                    person.displayAvatarURL({
                        format: "png",
                        size: 4096
                    })
                )
                .setImage(
                    person.displayAvatarURL({
                        format: "png",
                        dynamic: true,
                        size: 4096
                    })
                )
                .setColor('ORANGE')

            message.channel.send(avatarembed)
         
          
	},
};