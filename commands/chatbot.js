const Discord = require('discord.js')
const { Database } = require("quick.replit");
const gdb = new Database(process.env.REPLIT_DB_URL)

module.exports = {
	name: 'chatbot',
	description: 'Shows ChatBot\'s config',
	aliases: ['chatb'],
	usage: 'chatbot',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
       
        let prefix = await gdb.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = "!";
      const embedd = new Discord.MessageEmbed()
        .setThumbnail(bot.user.avatarURL())
        .setDescription(
          `**👋 Hey!\n Type \`${prefix}setchatbotchannel\` - To Set a Channel \n Type \`${prefix}disablechatbotchannel\` - To Disable a Channel.**\n **ChatBot Channel Set - None.** `
        )
       .addField(
          "Support Link: ",
          `**[Click Here!](https://https://discord.gg/eqjuTv8)**`,
          true
        )
        .addField(
          "Vote Link:",
          `**[Click Here!](https://top.gg/bot/729537680257450104/vote)**`,
          true
        )
        .setTimestamp()
       
        .setColor("BLURPLE")
        .setFooter('Credits to MoriDelta#6969')
      
       let channel1 = await gdb.get(`chatbot_${message.guild.id}`);
      if(!channel1) return message.channel.send(embedd)
      var sChannel = message.guild.channels.cache.get(channel1);
      let embedvch = "<#" + sChannel.id + ">"
      
      const embed = new Discord.MessageEmbed()
      
        .setThumbnail(bot.user.avatarURL())
        .setDescription(
          `**👋 Hey!\n Type \`${prefix}setchatbotchannel\` - To Set a Channel \n Type \`${prefix}disablechatbotchannel\` - To Disable a Channel.**\n **ChatBot Channel Set as - ${embedvch}**` 
        )
       .addField(
          "Support Link: ",
          `**[Click Here!](https://discord.gg/eqjuTv8)**`,
          true
        )
        .addField(
          "Vote Link:",
          `**[Click Here!](https://top.gg/bot/729537680257450104/vote)**`,
          true
        )
        .setTimestamp()
        .setColor("BLURPLE")
        .setFooter('Credits to MoriDelta#6969')
      message.channel.send(embed);
   
	},
};