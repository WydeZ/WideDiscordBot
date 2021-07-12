const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "erename",
  	description:'Renames an emoji from the server' ,
	aliases: ['emojirename'],
	usage: 'erename <emoji> <name>',
	cooldown: 1,
async execute(message, args, bot)  {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send(":x: | **You Don't Have Permission To Use This Command** ```MANAGE_EMOJIS```")
}
if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send(`:x: | **I Don't Have Permission To manage emojis**`)
}
if (!args[1]) return message.channel.send("Please specify an emote you want me to rename! | Usage: erename <emote> <name>");
if(!args[2]) return message.channel.send('Please specify a name for the emote | Usage: eremove <emoji> <name>')
let Thinger = args[1].split(":");

            let Animated;
            if (Thinger[0] === "<a") {
                Animated = true;
            } else {
                Animated = false;
            };

            const Name = Thinger[1];
            const ID = Thinger[2].slice(0, -1);
if (message.guild.emojis.cache.get(ID)) {
  emo = message.guild.emojis.cache.get(ID)
}
 else {
  return message.channel.send(":x: | Emoji not found, please try again")
}
if (!emo.name || !emo.id) return message.channel.send("Invalid emoji/argument");
   try {
     emo.setName(args.slice(2).join("_"))
     message.channel.send(`Succesfully changed the name to **${args.slice(2).join("_")}**`)
   } catch (err) {
     message.channel.send(`:x: | **An Error occured** ${err.message}`)
   }
  }
}