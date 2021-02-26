
const Discord = require('discord.js')
const GameCord = require('gamecord');
const ezgames = require ("ez-games.js")
module.exports = {
	name: 'flaggame',
	description:'Bot sends a flag and you have to guess the flag in a limited amount of time' ,
	aliases: ['guesstheflag'],
	usage: '!flaggame',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let data = await ezgames.flags(message.author.id, message.guild.id)
            const filter = m => m.author.id === message.author.id;



            let embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setTitle(`Flag Guessing Game`)
                .setImage(data.countryflag)
                .setFooter('Type your guess below! | You have 15 seconds')
            await message.channel.send(embed);

            message.channel.awaitMessages(filter, {
                max: 1,
                error: ["time"],
                time: 15000
            })
                .then(collected => {
                    const m = collected.first();
                    if (!m.content || m.content.toLowerCase() !== data.countryname.toLowerCase())
                        return message.channel.send(`❌ | Incorrect guess! | The correct answer was **${data.countryname}**!`)

                    return message.channel.send(`✅ **| Correct guess! Well Done!**`);
                })
                .catch(() => {
                    message.channel.send(`❌ | You did not answer in time! | The correct answer was **${data.countryname}**!`)
 
   
                })
	},
};