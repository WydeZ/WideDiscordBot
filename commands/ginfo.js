
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'ginfo',
	description: 'Gives information about giveaways in your server' ,
	aliases: ['giveawayinfo'],
	usage: '!ginfo',
	cooldown: 1,
		async execute(message, args, bot) {
         if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"')
         }
          let allGiveaways = bot.giveawaysManager.giveaways
    let notEnded = bot.giveawaysManager.giveaways.filter((g) => !g.ended);
    let ended = bot.giveawaysManager.giveaways.filter((g) => g.ended);
    message.channel.send(
        new Discord.MessageEmbed()
        .setTitle('Giveaway Information')
        .setColor('#FF0000')
        .setDescription(`All giveaways: **${allGiveaways.length}**\nGoing on: **${notEnded.length}**\nEnded: **${ended.length}**`)
    )
		
	},
};