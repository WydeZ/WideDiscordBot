const Discord = require("discord.js")

module.exports = {
  name: "msgemoji",
  usage: "msgemoji",
  description: "Finds an emoji from the last message sent in the channel!",
  aliases: ['emojimsg', 'emsg', 'messageemoji', 'emojimessage'],
  async execute( message, args, bot) {
   const hasEmoteRegex = /<a?:.+:\d+>/gm
  const emoteRegex = /<:.+:(\d+)>/gm
  const animatedEmoteRegex = /<a:.+:(\d+)>/gm

  const messages = await message.channel.messages.fetch()
  const messag = messages.find(m => m.content.match(hasEmoteRegex))

  if (emoji = emoteRegex.exec(messag)) {
  const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1"
 const embed1 = new Discord.MessageEmbed()
  .setTitle('Emoji Found!')
  .setDescription(`ID: ${emoji[1]}`)
  .setImage(url)
  .setFooter('ooo an emoji')
  .setColor('ORANGE')
  message.channel.send(embed1)
  }
  else if (emoji = animatedEmoteRegex.exec(messag)) {
  const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".gif?v=1"
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Emoji Found!')
  .setDescription(`ID: ${emoji[1]}`)
  .setImage(url)
  .setFooter('ooo an emoji')
  .setColor('ORANGE')
  message.channel.send(embed1)
  }
  else {
  message.channel.send("Couldn't find an emoji to paste!")
  }
    
  }
}