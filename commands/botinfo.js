const Discord = require('discord.js')
const fetch = require('node-fetch')
const moment = require ('moment')
module.exports = {
	name: 'botinfo',
	description: 'Shows general information about me',
	aliases: ['botinformation'],
	usage: '!botinfo',
	cooldown: 1,
		async execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const EMBED = new Discord.MessageEmbed()
                .setTitle('Bot Info')
                .addField('Bot Name', 'Wide#9256')
                .addField('Bot Owner', 'WideIrenaKan1#5105')
                .addField('Channels', bot.channels.cache.size)
                .addField('Servers', bot.guilds.cache.size)
                .addField('Uptime', `${moment.utc(bot.uptime).format('HH:mm:ss')}`, true)
                .setFooter('Bot ID: 729537680257450104                            Owner ID: 719507348137181254')
                .setColor(0xF1C40F)
            message.channel.send(EMBED);
 
	},
};