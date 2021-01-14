const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '!help | !help <command name>',
	cooldown: 1,
	async execute(message, args, bot) {
 const { commands } = message.client
 const PREFIX = "!"
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = PREFIX;
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')

 var Wide = `${prefix}ping, ${prefix}poll, ${prefix}say, ${prefix}8ball, ${prefix}rate, ${prefix}kill, ${prefix}roast, ${prefix}urban, ${prefix}emojify, ${prefix}translate, ${prefix}randomnumber, ${prefix}pp, ${prefix}emergency, ${prefix}translate, ${prefix}ascii, ${prefix}hack, ${prefix}pepe, ${prefix}howgay, ${prefix}insult, ${prefix}dadjoke, ${prefix}iq, ${prefix}fancy, ${prefix}vaporwave, ${prefix}reverse`
var funay = `${prefix}ttt, ${prefix}hangman, ${prefix}rps, ${prefix}quiz, ${prefix}snake, ${prefix}connectfour, ${prefix}pokemon, ${prefix}speedgame, ${prefix}flaggame. ${prefix}wyr`
var inf = `${prefix}userinfo, ${prefix}invite, ${prefix}profile, ${prefix}info, ${prefix}vote, ${prefix}serverinfo, ${prefix}botinfo, ${prefix}weather, ${prefix}covid,  ${prefix}emojiinfo, ${prefix}members, ${prefix}npm`
var mod = `${prefix}kick, ${prefix}ban, ${prefix}clear, ${prefix}slowmode, ${prefix}privatechannel, ${prefix}lockchannel, ${prefix}unlockchannel, ${prefix}openchannel, ${prefix}setnickname, ${prefix}channeladd, ${prefix}channelremove, ${prefix}nuke, ${prefix}giverole, ${prefix}removerole ${prefix}channeldelete`
var gib = `${prefix}gstart, ${prefix}gedit, ${prefix}greroll, ${prefix}gdelete, ${prefix}gend. ${prefix}ginfo`
var imagess = `${prefix}image, ${prefix}gif, ${prefix}deepfry, ${prefix}meme, ${prefix}delete, ${prefix}trigger, ${prefix}trash, ${prefix}pixelate, ${prefix}grayscale, ${prefix}wanted, ${prefix}wasted, ${prefix}changemymind, ${prefix}blur, ${prefix}clyde, ${prefix}grave, ${prefix}inverted, ${prefix}achievement, ${prefix}magik, ${prefix}wide`
var other = `${prefix}bug, ${prefix}report, ${prefix}suggestion, ${prefix}avatar, ${prefix}translate, ${prefix}discrim, ${prefix}links, ${prefix}newprefix, ${prefix}embed, ${prefix}afk`
var pog = `${prefix}chatbot, ${prefix}setchatbotchannel, ${prefix}disablechatbotchannel, ${prefix}setstarboard, ${prefix}setstarcount, ${prefix}starboard`
 if(!args[1]){

            let embed = new Discord.MessageEmbed()
                .setTitle('Commands')
                .addField('Fun 🎲', Wide)
                .addField('Games 🎮', funay)
                .addField('Information 📙', inf)
                .addField(`Images 🖼`, imagess)
                .addField('Moderation 👩‍⚖️', mod)
                .addField('Giveaway🎉', gib)
                .addField('Other', other)
                .addField('Awsome Addons!', pog)
                .setColor('RANDOM')
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter(`Type ${prefix}help <command-name> to get more info about the command`)
        
            message.channel.send(embed)
 } else {
   
    const name = args[1].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Please provide a valid command name. Use !help to see the list of available commands');
        }

    const embedd = new Discord.MessageEmbed()
    .setTitle(`Name: ${command.name}`)
    .addField('Aliases', `${command.aliases.join(", ")}`)
    .addField('Description', `${command.description}`)
      .addField('Usage',  `${command.usage}`)
        .setFooter(`Cooldown: ${command.cooldown || 3} second(s)`)
    .setColor("RANDOM")
    .setThumbnail(bot.user.displayAvatarURL())
        message.channel.send(embedd);
 }

    },
}