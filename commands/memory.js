
const Discord  = require("discord.js");

module.exports = {
  name: "memory",
  description: "Shows you how much memory usage of the bot",
  aliases: ['memories'],
usage: '!memory',
cooldown: 1,
  execute(message, args, bot) {
const Embed = new Discord.MessageEmbed()
            .setTitle(`💿 Memory Usage`)
            .addFields(
                { name: "Memory Usage", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`},
            )
            .setColor('RANDOM')

        message.channel.send(Embed)

    
  },
};