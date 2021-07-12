const Discord = require('discord.js')
const randomPuppy = require('random-puppy');
module.exports = {
	name: 'meme',
	description: 'Sends a meme',
	aliases: ['funnymeme'],
	usage: 'meme',
	cooldown: 1,
	async execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const subReddits = ["dankmemes", "meme", "memes", "wholesomememes", "cleanmemes"]
            const random = subReddits[Math.floor(Math.random() * subReddits.length)]

            const img = await randomPuppy(random);

            const memeEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(img)
                .setTitle(`Your meme. From r/${random}`)
                .setURL(`https://reddit.com/r/${random}`)

            message.channel.send(memeEmbed);
     
               
	
	},
};