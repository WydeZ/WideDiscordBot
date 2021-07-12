const Discord = require('discord.js')
module.exports = {
	name: 'report',
	description: 'Reports a person to the bot support team',
	aliases: ['reports'],
	usage: 'report <user> <reason>',
	cooldown: 1,
	execute(message, args, bot) {
     let target = message.mentions.members.first()
            if (!target) return message.channel.send('Please provide a user that you wish to report').then(m => m.delete({ timeout: 15000 }));

            var reasons = args.slice(2).join(" ");
            if (reasons.length > 40) return messsage.channel.send('Please keep it under 40 characters')
            if (!reasons) return message.channel.send(`Please provide a reason for reporting **${target.user.username}**`).then(m => m.delete({ timeout: 15000 }));
            let guildMain = bot.guilds.cache.get("719904792922816596")
            let reportsChannel = guildMain.channels.cache.find(x => x.id === "747697771594645566")


            if (args[1] === target, args[2] === reasons) {
                message.channel.send('Your report has been filled to the staff team. Thank you for reporting!')
                const embed = new Discord.MessageEmbed()
                    .setTitle('A user has made a reported somebody!')
                    .setDescription(`**${message.author.tag}** has reported **${target.user.tag}** for **${reasons}**.`)
                    .setFooter(`ID: ${message.author.id} & ${target.user.id}`)
                    .setColor('RANDOM')
                reportsChannel.send(embed)
            }

	
	},
};