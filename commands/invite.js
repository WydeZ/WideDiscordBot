const Discord = require('discord.js')
module.exports = {
	name: 'invite',
	description: 'Invite links to the bot',
	aliases: ['inv'],
	usage: '!invite',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const inviteembed = new Discord.MessageEmbed()
                .setTitle('Invite Wide!')
                .addField('Invite Me!', "[Click Here](https://discord.com/oauth2/authorize?client_id=729537680257450104&scope=bot&permissions=8)")
                .addField('Check me out on other websites!', "[top.gg](https://top.gg/bot/729537680257450104)\n[DBL](https://discordbotlist.com/bots/wide)\n[Discord Bots](https://discord.bots.gg/bots/729537680257450104)\n[BOD](https://bots.ondiscord.xyz/bots/729537680257450104)\n[RBL](https://bots.rovelstars.ga/bots/729537680257450104)\n[BFD](https://botsfordiscord.com/bot/729537680257450104)")
                .setColor('00FFFF')
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(inviteembed)
    
 
	},
};