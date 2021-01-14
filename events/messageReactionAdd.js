const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: "messageReactionAdd",
    async execute(bot, reaction, user) {
        if (user.partial) await user.fetch();
        if (reaction.partial) await reaction.fetch();
        if (reaction.message.partial) await reaction.message.fetch();
         const starboardchan = db.fetch(`starboardchan_${reaction.message.guild.id}`)
const starboardnum = db.fetch(`starcount_${reaction.message.guild.id}`)
        if(user.bot) return;
        if(starboardchan === null) return;
            if (reaction.emoji.name === "⭐"){
                if (reaction.count == (starboardnum || 3)){ // here, you can put how many reactions you need to post something into starboard
                    const channelStarboard = bot.channels.cache.find(channel => channel.id === starboardchan)
                    const starboardMessage = reaction.message.content
                    const starboardEmbed = new Discord.MessageEmbed()
                    .setAuthor(reaction.message.author.username, reaction.message.author.displayAvatarURL())
                    .setDescription(`${starboardMessage}`)
                    .setColor("RANDOM")
                    .addField('Source', `[Jump!](https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id})`)
                    .setFooter(`From ${reaction.message.author.tag}`)
                    channelStarboard.send(`**Message has reached ${starboardnum} ⭐ Star(s)!** <#${reaction.message.channel.id}>`, starboardEmbed)
                } else return
            }
        
    }
}