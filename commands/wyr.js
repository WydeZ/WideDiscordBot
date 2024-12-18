const Discord = require("discord.js");
const fetch = require('node-superfetch');
module.exports = {
    name: 'wyr',
    description: 'Would you rather',
    args: false,
    usage: `wyr`,
    aliases: ['wouldyourather'],
    async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
        if (!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('I do not have the right permission: Add Reactions')
      const data = await this.fetchScenario();

      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM ")
        .setTitle("Would you rather...")
        .setDescription(`**A.** ${data.option_1}\n**B.** ${data.option_2}`)
            .setColor('RANDOM')
    },

    async fetchScenario() {
            const { text } = await fetch.get('http://either.io/');
            return JSON.parse(text.match(/window.initial_question = (\{.+\})/)[1]).question;
        }
}