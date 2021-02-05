
const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')
module.exports = {
	name: 'ownerstart',
	description: 'Starts an epic giveaway' ,
	aliases: ['ownerstart'],
	usage: '[command name]',
	cooldown: 1,
	execute(message, args, bot) {
  if(message.author.id === '719507348137181254'){
    
   let ended = bot.giveawaysManager.giveaways.filter((g) => g.ended);

let giveawayDuration = args[1]
            if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Please provide a valid duration | Usage: !gstart {duration} {winners} {prize} ex: !gstart 1d 1 Awsome Prize');
const wideemoji = bot.emojis.cache.get("806747858316296202")
            let giveawayWinners = args[2];

            if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners! |  Usage: !gstart {duration} {winners} {prize} ex: !gstart 1d 1 Awsome Prize');

            let giveawayPrize = args.slice(3).join(" ");

            if (!giveawayPrize) return message.channel.send('What prize do you wanna give? |  Usage: !gstart {duration} {winners} {prize} ex: !gstart 1d 1 Awsome Prize');
            message.delete()
            let agw = 
            bot.giveawaysManager.start(message.channel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: giveawayWinners,
                hostedBy: message.author,
                messages: {
                     giveaway: `${wideemoji} **GIVEAWAY** ${wideemoji}`,
                    giveawayEnded: `${wideemoji} **GIVEAWAY ENDED** ${wideemoji}`,
                    timeRemaining: "Time remaining: **{duration}**",
                    inviteToParticipate: "React with 🎉 to enter",
                    winMessage: `Congratulations {winners}! You won **{prize}** ${wideemoji}\n{messageURL}`,
                    embedFooter: "Giveaway time!",
                    noWinner: "Couldn't determine a winner",
                    hostedBy: "Hosted by {user}",
                    winners: "winner(s)",
                    endedAt: "Ends at",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }   
            })
            
  } else return message.reply('ur not the owner')
	},
};