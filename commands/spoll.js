
const Discord = require('discord.js')
module.exports = {
	name: 'spoll',
	description:'Makes a simple poll' ,
	aliases: ['simplepoll', 'simpol', 'quickpoll'],
	usage: 'spoll <question>',
	cooldown:31,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
   if (!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('I do not have the right permission: Add Reactions')
 const ye = args.slice(1).join(' ')
 if(!ye) return message.channel.send('Please enter your question for the poll! | Usage: spoll <question>')

message.delete()
    if (ye.length > 2048) return message.channel.send('Your question cannot be more than 2048 characters!')

 const embed = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} asks...`)
 .setDescription(ye)
 .setFooter(`Poll made by ${message.author.tag} | ${message.author.id}`)
 .setColor('ORANGE')

 message.channel.send(embed).then(async (hi) => {
     await hi.react('👍');
            await hi.react('👎');
 })
   
              
	},
};