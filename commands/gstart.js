
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'gstart',
	description: 'Starts an epic giveaway' ,
	aliases: ['startgiveaway', 'start-giveaway'],
	usage: '[command name]',
	cooldown: 1,
	execute(message, args, bot) {
      // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"');
    }

            if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')


let giveawayDuration = args[1]
            if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Please provide a valid duration | Usage: !gstart {duration} {winners} {prize} ex: !gstart 1d 1 Awsome Prize');

            let giveawayWinners = args[2];

            if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners! |  Usage: !gstart {duration} {winners} {prize} ex: !gstart 1d 1 Awsome Prize');

            let giveawayPrize = args.slice(3).join(" ");

            if (!giveawayPrize) return message.channel.send('What prize do you wanna give? |  Usage: !gstart {duration} {winners} {prize} ex: !gstart 1d 1 Awsome Prize');
            message.delete()
            bot.giveawaysManager.start(message.channel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: giveawayWinners,
                hostedBy: message.author,
                messages: {
                    giveaway: "🎉🎉**GIVEAWAY**🎉🎉",
                    giveawayEnded: "🎉🎉**GIVEAWAY ENDED**🎉🎉",
                    timeRemaining: "Time remaining: **{duration}**",
                    inviteToParticipate: "React with 🎉 to enter",
                    winMessage: "Congrats {winners}, you won **{prize}**",
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
            });   
		
	},
};