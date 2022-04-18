const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'dare',
	description:'Generates a random dare! (It is like truth or dare)' ,
	aliases: ['dares'],
	usage: 'dare',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
      const dare = await fetch(`https://api.truthordarebot.xyz
/api/dare`)
         const embed = new Discord.MessageEmbed()
    .setTitle('Dare')
    .setDescription(dare['question'])
       .setColor("ORANGE")
    message.channel.send(embed) 
      const hi = dare['question']
    console.log(hi, JSON.stringify(hi))
                                           
	},
};