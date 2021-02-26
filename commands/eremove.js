
const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
module.exports = {
	name: 'emojiremove',
	description:'Removes an emoji from the server' ,
	aliases: ['eremove'],
	usage: '!eremove <emoji>',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send('I do not have the right permission: Manage Emojis')
        if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send('You do not have the right permission: Manage Emojis')
    
  if (!args[1]) return message.channel.send("Please specify an emote to remove! | Usage: !eremove <emoji>");
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
} else {
  return message.channel.send(":x: I cannot find that emoji! Please specify an emoji that is in this server | Usage: !eremove <emoji>")
}
if (!emo.name || !emo.id) return message.channel.send("Invalid emoji/argment");
   try {
     emo.delete()
     message.channel.send("Succesfully removed that emoji!")
   } catch (err) {
     message.channel.send(":x: I was unable to fulfill your request")
   }

      
    
              
	},
};