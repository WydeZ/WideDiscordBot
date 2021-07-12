const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
  name: "starboard",
  usage: "starboard",
  description: "Shows information about starboard",
  aliases:["starb"],
  async execute(message, args, bot) {
 if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')

        let prefix = await db.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = "!";
     let starchan = db.get(`starboardchan_${message.guild.id}`)
     if(starchan === null) starchan = "Not Set Up Yet!"
      
    let starcount = db.get(`starcount_${message.guild.id}`)
    if(starcount === null) starcount = "Not Set Up Yet!"
      let embedvch = "<#" + starchan + ">"
      if(starcount === null) embedvch = "Not Set Up Yet"
      
      const embed = new Discord.MessageEmbed()
      
        .setThumbnail(bot.user.avatarURL())
        .setDescription(
          `**👋 Hey!\n Type \`${prefix}setstarboard <#channel>\` - To Set a Channel \n Type \`${prefix}setstarcount\` - To Set The Star Count.**\n Type \`${prefix}setstarboard\` to reset starboard\n **ChatBot Channel Set as - ${embedvch}**\n**Star Count Set as - ${starcount}**` 
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
        .setColor("BLURPLE");
      message.channel.send(embed);
  
   
  },
}