
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'greroll',
	description: 'Rerolls an ended giveaway' ,
	aliases: ['rerollgiveaway'],
	usage: '!greroll <channel id>',
	cooldown: 1,
	execute(message, args, bot) {
          if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"')
          }

            // If no message ID or giveaway name is specified
            if (!args[1]) {
                return message.channel.send(':x: You have to specify a valid message ID! | Usage: !gend <messagid>');
            }

            // try to found the giveaway with prize then with ID
            let giveaway =
              
                bot.giveawaysManager.giveaways.find((g) => g.messageID === args[1]);

            // If no giveaway was found
            if (!giveaway) {
                return message.channel.send(`I was unable to find a giveaway for ${args.slice(1).join(' ')}.`);
            }

            // Edit the giveaway
          bot.giveawaysManager.reroll(args[1] , {
        messages: {
            congrat: ':tada: New winner(s) : {winners}! Congratulations!\n{messageURL}',
            error: 'No valid participations, no winners can be chosen!'
        }
    }).catch((_err) => {
                message.channel.send("No giveaway found for " + messageID + ", please check and try again");
            });
		
	},
};