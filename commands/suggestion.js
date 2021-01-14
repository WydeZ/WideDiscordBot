const Discord = require('discord.js')
module.exports = {
	name: 'suggestion',
	description: 'Make a suggestion for the bot',
	aliases: ['suggest'],
	usage: '!suggest <suggestion>',
	cooldown: 1,
	execute(message, args, bot) {
	 var reason = message.content.split(" ").slice(1).join(" ")
            if (reason.length > 40) return messsage.channel.send('Please keep it under 40 characters | You can join our support server here https://discord.gg/eqjuTv8')
            if (!args[1]) return message.channel.send(`Please provide a suggestion`).then(m => m.delete({ timeout: 15000 }));
            let guildMain = bot.guilds.cache.get("719904792922816596")
            let reportsChannel = guildMain.channels.cache.find(x => x.id === "751254061067665538")
            message.channel.send('Your suggestion has been filled to the staff team. Thank you for your suggestion!')
            const embed = new Discord.MessageEmbed()
                .setTitle('A user has made a suggestion')
                .setDescription(`**${reason}**`)
                .setFooter(`Sent by ${message.author.tag} (${message.author.id})`)
                .setColor('RANDOM')
            reportsChannel.send(embed).then(MessageReaction => {
                MessageReaction.react('👍');
                MessageReaction.react('👎');
            })
	},
};