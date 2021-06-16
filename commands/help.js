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
  let prefix = await db.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = PREFIX;
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')

 var Wide = "`ping`, `poll`, `say`, `8ball`, `rate`, `kill`, `roast`, `urban`, `emojify`, `translate`, `randomnumber`,  `emergency,` `translate`, `ascii`, `hack`, `pepe`, `howgay`, `iq`, `truth`, `dare`, `decode`, `scrabble`"
var funay = "`battle`, `ttt`, `hangman`, `rps`, `quiz`, `snake`, `connectfour`, `pokemon`, `speedgame`, `flaggame`, `wyr`"
var inf = "`userinfo`, `invite`, `profile`, `vote`, `serverinfo`, `botinfo`, `weather`, `covid`,  `emojiinfo`, `npm`, `define`, `decode`"
var mod = "`kick`, `ban`, `clear`, `slowmode`, `privatechannel`, `lockchannel,` `unlockchannel`, `openchannel`, `setnickname`, `channeladd`, `channelremove`, `nuke`, `giverole`, `removerole`, `channeldelete`"
var gib = "`gstart`, `gedit`, `greroll`, `gdelete`, `gend`, `ginfo`"
var imagess = "`image`, `gif`, `pat`, `deepfry`, `meme`, `delete`, `trigger`, `trash`, `pixelate`, `grayscale`, `wanted`, `wasted`, `changemymind`, `blur`, `clyde`, `grave`, `inverted`, `achievement`, `magik`, `wide`"
var other = "`bug`, `report`, `suggestion`, `avatar`, `translate`, `links`, `newprefix`, `embed`, `afk`, `steale`, `eremove`, `decode`, `msgemoji`"
var pog = "`chatbot`, `setchatbotchannel`, `disablechatbotchannel`, `setstarboard`, `setstarcount`, `starboard`"
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