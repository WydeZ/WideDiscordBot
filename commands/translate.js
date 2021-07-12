
const Discord = require('discord.js')
const translate = require('@k3rn31p4nic/google-translate-api');
module.exports = {
	name: 'translate',
	description:'Translate the text to a different langauge' ,
	aliases: ['translation'],
	usage: 'translate <language> <text>',
	cooldown: 1,
	async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            try {
                if (args.length < 2) {
                    return message.reply("Command Usage: `translate <Language> <Text>`")
                }
                if (!args[1]) return message.channel.send('You need to provide a language | Usage: !translate {language} {text}')
                if (!args.slice(2).join(" ")) return message.channel.send('You need to provide a text to translate | Usage: translate {language} {text}')

                const result = await translate(args.slice(2).join(' '), { to: args[1] });

                const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(result.text)
                    .setFooter(`Translation from ${result.from.language.iso.toUpperCase()} to ${args[1].toUpperCase()}`);
                message.channel.send(embed);
            } catch (err) {
                return message.reply(`Oh no, an error occurred: \`${err.message}\`.`)
            }
     
	},
};