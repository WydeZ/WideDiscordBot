
const Discord = require('discord.js')
module.exports = {
	name: 'bug',
	description:'Reports a bug in the bot' ,
	aliases: ['glitch'],
	usage: 'bug <the bug>',
	cooldown: 1,
		async execute(message, args, bot) {
          var reason = message.content.split(" ").slice(1).join(" ")
            if (reason.length > 40) return messsage.channel.send('Please keep it under 40 characters | You can join our support server here https://discord.gg/eqjuTv8')
            if (!args[1]) return message.channel.send(`Please provide the bug (ex: bug the command help isnt working)`).then(m => m.delete({ timeout: 15000 }));
            let guildMain = bot.guilds.cache.get("719904792922816596")
            let reportsChannel = guildMain.channels.cache.find(x => x.id === "747697732294279268")
            message.channel.send('Your bug report has been filled to the staff team. Thank you for reporting! | If you misuse the bug command multiple times, you will get blacklisted.')
            const embed = new Discord.MessageEmbed()
                .setTitle('A user has encountered a bug')
                .setDescription(`**${reason}**`)
                .setFooter(`Sent by ${message.author.tag} (${message.author.id})`)
                .setColor('RANDOM')
            reportsChannel.send(embed)
            })
          
	},
};