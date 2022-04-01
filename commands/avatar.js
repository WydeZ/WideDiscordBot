const Discord = require('discord.js')
module.exports = {
	name: 'avatar',
	description:'Get the avatar URL of the tagged user(s), or your own avatar.' ,
	aliases: ['icon', 'av', 'pfp'],
	usage: 'avatar <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
           if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
             if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
            let person = message.mentions.users.first() || message.author || await message.guild.members.fetch(args[1]);
      
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