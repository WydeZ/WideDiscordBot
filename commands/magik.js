const fetch = require('node-fetch')
const Discord = require("discord.js");

module.exports = {
  name: "magik",
  aliases: ["magic", "majik"],
  description: "Makes an avatar *magik*",
  usage: "!magik <user(optional)>",
  async execute(message, args, bot)  {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
    message.channel.send('Please Wait **This may take a while**')
    let useio = message.mentions.users.first() || message.author
    let imgo = useio.displayAvatarURL({size: 2048, format: 'jpg'})
  fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${imgo}&intensity=2`) /**Fetching the magik pic from nekobot api | You can change the intensity of magik here*/
   .then(res => res.json())
   .then(data => { /**We are collecting the data from the website*/
     let emb = new Discord.MessageEmbed()
     .setColor("BLUE")
     .setImage(data.message) /**Getting the Magik image link from we*/
     message.channel.send(emb) /**Sends as a embed.. If you want it plain, Just do message.channel.send(data.message)*/
   })

   
  }
};