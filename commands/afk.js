
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'afk',
	description:'Makes you go AFK' ,
	aliases: ['afks'],
	usage: '!afk <reason(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
    
    if(args.slice(1).join(" ")) {
     if (args.slice(1).join(" ").includes(`@`)) {
        return message.channel.send(`**:x: Please dont mention anyone**`);
     }
    }

const status = new db.table("AFKs")
		let afk = await status.fetch(message.author.id, message.guild.id)

		if(!afk){
		message.reply(`You have been set to AFK! Reason: ${args.slice(1).join(" ") ? args.slice(1).join(" "): "Unspecified"}`)
      message.member.setNickname(`[AFK] ${message.author.username}`).catch((err) => {
                return
            })
			      status.set(`${message.author.id}_${message.guild.id}`, args.slice(1).join(" ") || `Unspecified`)
		} else {
		message.reply(`You have been removed from the AFK list!`).then(m => m.delete({ timeout: 5000 }));
			status.delete(message.author.id, message.guild.id)
		}

  
	
          
         
          
	},
};