const Discord = require('discord.js')
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk")
module.exports = {
	name: 'gif',
	description: 'Gives a gif of the selected topic',
	aliases: ['search-gif'],
	usage: '!gif <thing>',
	cooldown: 1,
	async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let term = args.slice(1).join(" ")
            if (!term) return message.channel.send('What gif do you want me to give? | Usage: !gif <thing>')
            giphy.search(term).then(function (res) {
                // Res contains gif data!
                let id = res.data[0].id
                let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
                const embed = new Discord.MessageEmbed()
                    .addField('Page URL', "[Giphy](" + res.data[0].url + ")")
                    .addField('Search Term', "`" + term + "`")
                    .setFooter('Powered by GIPHY', "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif")
                    .setImage(msgurl)

                message.channel.send(embed).catch((err) => {
                    return message.channel.send('I was unable to fulfill your request. | Bug Maybe? Report it using the !bug command')
                })

            });


    
	},
};