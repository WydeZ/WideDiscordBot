
const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
  name: "setstarboard",
  usage: "setstarboard <#channel>",
  description: "Set the starboard channel",
  aliases: ["setstarbr"],
  async execute(message, args, bot) {


    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `You don't have the right permission: Manage Server.`
      );
    let channel = message.mentions.channels.first()
    
    if(!channel.viewable) return message.channel.send("I can't see that channel!")


    if (!channel) {
   
      await db.set(`starboardchan_${message.guild.id}`, null)
      message.channel.send(
        "The starboard channel has been reset since no channel was provided | Usage: setstarboard <#channel>"
      );
    } else {

    await db.set(`starboardchan_${message.guild.id}`, channel.id)

    message.channel.send(`**I have succesfully setted the starboard channel as** ${channel}`); //send success message
    }
  },
};