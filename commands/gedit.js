
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'gedit',
	description: 'Edits an active giveaway' ,
	aliases: ['editgiveaway'],
	usage: '!gedit <Message ID> <time> <winners> <prize>',
	cooldown: 1,
		async execute(message, args, bot) {
           if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"')
           }
            let messageID = args[1];
            let giveawayDuration = args[2];
            if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae provide a valid duration | ex: !gedit {messageid} 30s 3 nitro');
            let giveawayWinners = args[3];
            if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners! | ex: !gedit {messageid} 30s 3 nitro')
             let giveaway =
                // Search with giveaway prize
                bot.giveawaysManager.giveaways.find((g) => g.prize === args.slice(2).join(' ')) ||
                // Search with giveaway ID
                bot.giveawaysManager.giveaways.find((g) => g.messageID === args[1]);

            // If no giveaway was found
            if (!giveaway) {
                return message.channel.send(`I was unable to find a giveaway for "${args.slice(1).join(' ')}" | Did the timer froze/won't end? Do !bgend (!backupgend) to end the giveaway`);
            }
            let giveawayPrize = args.slice(4).join(" ");
            if (!messageID) message.channel.send('Please provide a message ID.')
            bot.giveawaysManager.edit(messageID, {
                newWinnerCount: giveawayWinners,
                newPrize: giveawayPrize,
                setEndTimestamp: Date.now() + ms(giveawayDuration),
            }).then(() => {
                message.channel.send("Success! Giveaway will updated very soon.");
            }).catch((_err) => {
                message.channel.send("No giveaway found for " + messageID + ", please check and try again");
            });       
		
            
	},
};