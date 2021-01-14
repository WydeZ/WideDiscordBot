
const Discord = require('discord.js')
const querystring = require('querystring')
module.exports = {
	name: 'urban',
	description:'Search a word in the urban dictionary' ,
	aliases: ['urbandictionary'],
	usage: '!urban <word>',
	cooldown: 1,
	async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const searchString = querystring.stringify({ term: args.slice(1).join(" ") })

            if (!args.slice(1).join(" ")) return message.channel.send(new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You need to specify something you want to search the urban dictionary`)
            )
            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())
            try {
                const [answer] = list
                const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)
                const embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(answer.word)
                    .setURL(answer.permalink)
                    .addFields(
                        { name: 'Definition', value: trim(answer.definition, 1024) },
                        { name: 'Example', value: trim(answer.example, 1024) },
                        { name: 'Rating', value: `${answer.thumbs_up} 👍 ${answer.thumbs_down} 👎` },
                    )
                message.channel.send(embed)
            } catch (error) {
                return message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
                )
            }
          
	},
};