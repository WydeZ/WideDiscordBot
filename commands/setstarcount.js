const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
  name: "setstarcount",
  usage: "!setstarcount <#number>",
  description: "Set the stars required for the message to appear in the starboard channel",
  aliases:["setstarc"],
  async execute(message, args, bot) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `You don't have the right permission: Manage Server`
      );
    let channel = args[1] //mentioned channel
    
    if (!channel) {
    message.channel.send('Please provide a number! | Usage: !setstarcount <number> or !setstarcount delete to delete the star count')
  
    }
    const e = parseInt(channel)
    if(!e) return message.channel.send('Thats not a number!')
    await db.set(`starcount_${message.guild.id}`, e)

    message.channel.send(`**I have succesfully setted the starcount to ${channel}**`); 

    
  },
}