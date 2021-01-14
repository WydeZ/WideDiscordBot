
const Discord = require('discord.js')
module.exports = {
	name: 'poll',
	description:'Make a poll ' ,
	aliases: ['polls'],
	usage: '!poll <question> | <choice1> | <choice2> |.. Up to 20 choices',
	cooldown: 1,
	async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have the right permisison: Manage Messages')
            const reactions = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', 'g', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']
            const [question, ...choices] = args.slice(1).join(' ').split('|')
            if (!question) return message.channel.send("What do you want your question to be? | Usage: !poll <question> | <choice1> | <choice2> | .. up to 20 choices")
            if (!choices.length) return message.reply("Please input your choice | Usage: !poll <question> | <choice1> | <choice2> | .. up to 20 choices")
            if (choices.length > 20) return message.reply("Too many choices! The maximum is 20")
            message.delete()
            const sent = await message.channel.send(new Discord.MessageEmbed()
                .setTitle(`${question}`)
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(`Poll Created by: ${message.author.tag}`)
                .setDescription(choices.map((choice, i) => `${reactions[i]} ${choice}`).join('\n\n')))
            for (i = 0; i < choices.length; i++) await sent.react(reactions[i]).catch((err) => {
                message.channel.send('I was unable to fulfill your request, try making the text shorter.')
            }

            )
              
	},
};