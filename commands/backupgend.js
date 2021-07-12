
const Discord = require('discord.js')
module.exports = {
	name: 'backupgend',
	description:'gend backup' ,
	aliases: ['bgend'],
	usage: 'bgend <messageID> <number of winners>',
	cooldown: 1,
		async execute(message, args, bot) {
        if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"')
         }
      if(!args[1]) return message.channel.send('Please provide a message ID! | Usage !bgend <messageID> <number of winners>')
  
 let winners = args[2]
  if(!args[1]) return message.channel.send('Please specify a message ID! | Usage: !bgend <messageid> <winners>')
  if(!winners) return message.channel.send('Please specify a winner!')
  if(isNaN(winners)) return message.channel.send('The winners must be a number!')
  if(parseInt(winners) < 0) return message.channel.send('The winners must be atleast 1!')
   if(parseInt(winners) > 10) return message.channel.send('The winners must be less than 10!')
    const m = await message.channel.messages.fetch(args[1]).catch((err) => {
      return message.channel.send('That is not a valid message ID | The message must be in the same channel as you.')
    })
  
    if(!m) return message.reply('That is an invalid message ID!')
    const reaction = m.reactions.cache.find(r => r.emoji.name == '🎉'); 
    if(!reaction) return message.channel.send('There is no giveaway emoji!')
    
    let userss = await m.reactions.cache.get("🎉").users ? (await m.reactions.cache.get("🎉").users.fetch()).array().filter(user => user.id !== bot.user.id | !user.bot) : []
    

       let users = [];
 for (var i = 0, len = winners; i < len; i++) {
                                                            let random = Math.floor(Math.random() * userss.length);
                                                            if (userss.length == 0) {
                                                                return message.channel.send('There were no valid participants!')
                                                            } else {
                                                                let id = userss[random].id;
                                                                                               
       users.push("<@" + id + ">");      
       
                                                            }}
                                                                                                                  
     message.channel.send(`:tada: ${users.join(", ")} has won the giveaway! Congratulations!\n${m.url}`);
                                                          
    
         
          
	},
};