
const Discord = require('discord.js')
var randomWords = require('random-words');
module.exports = {
	name: 'speedgame',
	description:'A speed typing game' ,
	aliases: ['typinggame', 'fast'],
	usage: '!speedgame',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
        (message.author.id, message.guild.id, message.author.displayAvatarURL({ format: 'png' }), bot.user.username)
            const filter = m => m.author.id === message.author.id;

let daword = randomWords({exactly: 4, maxLength: 5, join: ' '})
     let embed = new Discord.MessageEmbed()
     .setTitle('Type the word below!')
     .setDescription(`${daword}`)
     .setColor('BLURPLE')
     .setFooter('You have 7 seconds')
message.channel.send(embed)
            message.channel.awaitMessages(filter, {
                max: 1,
                error: ["time"],
                time: 7000
            })
                .then(collected => {
              
                    const m = collected.first();
                    if (!m.content || m.content.toLowerCase() !== daword.toLowerCase())
                        return message.channel.send(`❌ | Incorrect guess! | The correct answer was **${daword}**!`)

                    return message.channel.send(`✅ **| Correct guess! Well Done!**`);
                })
                .catch(() => {
                    message.channel.send(`❌ | You did not answer in time. The correct answer was **${daword}**!`);
                });
   
              
	},
};