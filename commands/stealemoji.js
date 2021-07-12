
const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
module.exports = {
	name: 'stealemoji',
	description:'Steals a custom emoji then puts it in the server' ,
	aliases: ['steale', 'steal'],
	usage: 'steale <emoji> <name>',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send('I do not have the right permission: Manage Emojis')
        if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send('You do not have the right permission: Manage Emojis')

        let isUrl = require("is-url");
let type = "";
let name = "";
let emote = args.slice(1).join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
if (emote) {
  emote = emote[0];
  type = "emoji";
  name = args.slice(2).join(" ").replace(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi, "").trim().split(" ")[0];
} else  {
  emote = `${args.slice(1).find(arg => isUrl(arg))}`
  name = args.slice(2).find(arg => arg != emote);
  type = "url";
}
let emoji = { name: "" };
      let Link;
      if (type == "emoji") {
        emoji = Discord.Util.parseEmoji(emote);
      Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
} else { 
  if (!name) return message.channel.send("Please provide a name for the emoji! | Usage: steal <emoji/link> <name>");
  Link = message.attachments.first() ? message.attachments.first().url : emote;  }
            message.guild.emojis.create(
                `${Link}`,
                `${`${name || emoji.name}`}`
            ).then(em => message.channel.send(`Succesfully added ${em.toString()}!`)).catch(error => {
                 return message.channel.send(`An error has occured!\n\n**Possible Reasons:**\n\`\`\`- This server has reached the emojis limit\n- The bot doesn't have permissions.\n- The emojis size is too big \n - That emoji is a default emoji that can be used without having nitro!.\`\`\``)
})          
	},
};