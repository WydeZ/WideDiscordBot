
const Discord = require('discord.js')
const ms = require('ms')
 const { Database } = require("quick.replit");
const gdb = new Database(process.env.REPLIT_DB_URL)
module.exports = {
	name: 'gstart',
	description: 'Starts an epic giveaway' ,
	aliases: ['startgiveaway', 'start-giveaway'],
	usage: 'Usage: gstart {duration} {winners} {roleID/none} {prize}',
	cooldown: 1,
	async execute(message, args, bot) {
   if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
   if (!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('I do not have the right permission: Add Reactions')
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Wide Giveaways")){
        return message.channel.send(':x: You need to have the permission Manage Messages or a role named "Wide Giveaways"');
    }
const wideemoji = bot.emojis.cache.get("834224941150502912")
            if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')


let giveawayDuration = args[1]
            if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Please provide a valid duration | Usage: gstart {duration} {winners} {roleID/none} {prize} ex: gstart 1d 1 98398294 Awesome Prize | If you dont want any req: gstart 1d 1 none Awesome Prize');

            let giveawayWinners = args[2];

            if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners! | Usage: gstart {duration} {winners} {roleID/none} {prize} ex: gstart 1d 1 98398294 Awesome Prize | If you dont want any req: gstart 1d 1 none Awesome Prize');
              if(parseInt(args[2]) > 10) return message.channel.send('The winners must be less than 10!')
        if(ms(giveawayDuration) < ms('10s')) return message.channel.send('The giveaway cannot be less than 10 seconds!')
         if(ms(giveawayDuration) > ms('7d')) return message.channel.send('The giveaway cannot be more than 7 days!')

let req = args[3]
if(!req) return message.channel.send('Please provide a requirement! | Usage: gstart {duration} {winners} {roleID/none} {prize} ex: gstart 1d 1 98398294 Awesome Prize | If you dont want any req: gstart 1d 1 none Awesome Prize')
let oo = 'none'
let yesreq = message.guild.roles.cache.get(req) 
if(!yesreq && args[3] != oo) return message.channel.send('That is not a valid role ID! | If you want no role requirement, type "none"')
            let giveawayPrize = args.slice(4).join(" ");

            if (!giveawayPrize) return message.channel.send('What prize do you wanna give? | Usage: gstart {duration} {winners} {roleID/none} {prize} ex: gstart 1d 1 98398294 Awesome Prize | If you dont want any req: gstart 1d 1 none Awesome Prize');
            message.delete()

        if(args[3] === oo){
           await bot.giveawaysManager.start(message.channel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayWinners),
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
                    },       
                },
                lastChance: {
        enabled: true,
        content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
        threshold: 5000,
        embedColor: '#FF0000'
    },
             
            });  
        } else {
           await bot.giveawaysManager.start(message.channel, {
            time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayWinners),
                hostedBy: message.author,
                messages: {
                    giveaway: `${wideemoji} **GIVEAWAY** ${wideemoji}`,
                    giveawayEnded: `${wideemoji} **GIVEAWAY ENDED** ${wideemoji}`,
                    timeRemaining: `Time remaining: **{duration}**\nRole Required: ${yesreq}`,
                    inviteToParticipate: `React with 🎉 to enter`,
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
                },
                lastChance: {
        enabled: true,
        content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
        threshold: 5000,
        embedColor: '#FF0000'
    },
    exemptMembers: (member) => !member.roles.cache.get(yesreq.id),
    extraData: {
      role:yesreq
    }      
      })
	}
},
}