const Discord = require('discord.js')
module.exports = {
	name: 'links',
	description: 'Links related to the bot',
	aliases: ['link', 'support', 'website', 'server'],
	usage: 'links',
	cooldown: 1,
	execute(message, args, bot) {
 if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const linkembed = new Discord.MessageEmbed()
                .setTitle('Links')
                .addField('Links', "[Invite Link (Admin)](https://discord.com/oauth2/authorize?client_id=729537680257450104&scope=bot&permissions=8)\n[Invite Link (Recommended)](https://discord.com/oauth2/authorize?client_id=729537680257450104&scope=bot&permissions=2080631927)\n[Support Server](https://discord.gg/eqjuTv8)\n[Upvote Link](https://top.gg/bot/729537680257450104/vote)")
                .addField('Check me out on other websites!', "[top.gg](https://top.gg/bot/729537680257450104)\n[DBL](https://discordbotlist.com/bots/wide)\n[Discord Bots](https://discord.bots.gg/bots/729537680257450104)\n[BOD](https://bots.ondiscord.xyz/bots/729537680257450104)\n[RBL](https://bots.rovelstars.ga/bots/729537680257450104)\n[Discord Boats](https://discord.boats/bot/729537680257450104)\n[BFD](https://botsfordiscord.com/bot/729537680257450104)")
                .addField('Official Website:', '[Click Here!](https://wide.repl.co)')
                .setColor('ORANGE')
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(linkembed)
	},
};