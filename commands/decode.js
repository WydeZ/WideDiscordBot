const Fetch = require("node-fetch").default; //npm i node-fetch
const Discord = require('discord.js')
module.exports = {
  name: "decode",
  aliases: ['binary'],
  description: "Decode Binary!",
  usage: "decode <binary>",
async execute(message, args, bot) {
    if (!args[1]) return message.channel.send("Please give me a binary to decode! | Usage: decode <binary>");

    const { text } = await (await Fetch(`https://some-random-api.ml/binary?decode=${encodeURI(args.slice(1).join(' '))}`)).json();
    const embed = new Discord.MessageEmbed()
    .setTitle('Binary Decoded!')
    .setDescription(text)
    .setColor('ORANGE')
    return message.channel.send(embed).catch((err)=> {
      message.channel.send(`Oh no! Something went wrong! | **${err.message}**`)
    })
  },
}