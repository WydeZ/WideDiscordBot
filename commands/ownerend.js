
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'ownerend',
	description: 'Edits an active giveaway' ,
	aliases: ['endgiveaway'],
	usage: '!gend <channel id>',
	cooldown: 1,
		async execute(message, args, bot) {
         
       if(message.author.id === '719507348137181254'){
            // If no message ID or giveaway name is specified
            if (!args[1]) {
                return message.channel.send(':x: You have to specify a valid message ID! | Usage: !gend <messagid>');
            }

            // try to found the giveaway with prize then with ID
            let giveaway =
                // Search with giveaway prize
                bot.giveawaysManager.giveaways.find((g) => g.prize === args.slice(2).join(' ')) ||
                // Search with giveaway ID
                bot.giveawaysManager.giveaways.find((g) => g.messageID === args[1]);

            // If no giveaway was found
            if (!giveaway) {
                return message.channel.send(`I was unable to find a giveaway for ${args.slice(1).join(' ')}.`);
            }

            // Edit the giveaway
            bot.giveawaysManager.edit(giveaway.messageID, {
                setEndTimestamp: Date.now()
            })
                // Success message
                .then(() => {
                    // Success message
                    message.channel.send('Giveaway will end very shortly').then(m => m.delete({ timeout: 5000 }));
                })
                .catch((e) => {
                    if (e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)) {
                        message.channel.send('This giveaway is already ended!');
                    } else {
                        console.error(e);
                        message.channel.send('An unexpected error occured. | Bug Maybe? Report it using the !bug command');
                    }
                });
       } else return message.reply('ur not the owner')
		
	},
};