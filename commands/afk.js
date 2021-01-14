
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'afk',
	description:'Makes you go AFK' ,
	aliases: ['afks'],
	usage: '!afk <reason(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
    

const status = new db.table("AFKs")
		let afk = await status.fetch(message.author.id, message.guild.id)

		if(!afk){
		message.reply(`You have ben set to AFK! Reason: ${args.slice(1).join(" ") ? args.slice(1).join(" "): "Unspecified"}`)
      message.member.setNickname(`[AFK]${message.author.username}`).catch((err) => {
                return
            })
			status.set(message.author.id, message.guild.id, args.slice(1).join(" ") || `Unspecified`)
		} else {
		message.reply(`You have been removed from the AFK list!`).then(m => m.delete({ timeout: 2000 }));
			status.delete(message.author.id, message.guild.id)
		}
	
          
         
          
	},
};