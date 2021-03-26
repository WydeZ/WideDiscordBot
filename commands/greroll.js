
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'greroll',
	description: 'Rerolls an ended giveaway' ,
	aliases: ['rerollgiveaway'],
	usage: '!greroll <channel id>',
	cooldown: 1,
	async execute(message, args, bot) {
          if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"')
          }

            // If no message ID or giveaway name is 
              if(!args[1]) return message.channel.send('Please specify a message ID! | Usage: !greroll <messageid> <winners>')

            // try to found the giveaway with prize then with ID
            let giveaway =
              
                bot.giveawaysManager.giveaways.find((g) => g.messageID === args[1]);

            // If no giveaway was found
            if (!giveaway) {
                return message.channel.send(`I was unable to find a giveaway for ${args.slice(1).join(' ')}.`);
            }

   
  
 let winners = args[2]

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
                                                                                                          
     message.channel.send(`:tada: New winner(s) : ${users.join(", ")} has won the giveaway! Congratulations!\n${m.url}`).catch((_err) => {
                message.channel.send("No giveaway found for " + messageID + ", please check and try again");
            });
		
	},
};