
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'disablechatbotchannel',
	description:'Disables a ChatBot Channel',
	aliases: ['disablechatch'],
	usage: '!disablechatbotchannel <channel>',
	cooldown: 3,
		async execute(message, args, bot) {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed: {
            color: "RED",
            title: `You do not have the required Permissions! - Manage Server `
        }})
    try {
        let a = db.fetch(`chatbot_${message.guild.id}`)

        if (!a) {
            return message.channel.send({embed: {
            color: "RED",
            title:  `There is no ChatBot channel set to Disable! `
        }})
        } else {
            let channel = message.guild.channels.cache.get(a)
            bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send(`**ChatBot Channel Disabled!**`)
            db.delete(`chatbot_${message.guild.id}`)
    
            message.channel.send({embed: {
            color: "GREEN",
            title: `ChatBot Channel has been Succesfully Disabled! \`${channel.id}\``,
            footer: 'Credits to MoriDelta#6969'}})
        }
        return;
    } catch {
        return message.channel.send(`Error - Missing Permissions or Channel Doesn't Exist`)
    }

   
             
	},
};