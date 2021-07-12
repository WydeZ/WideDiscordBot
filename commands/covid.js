const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'covid',
	description: 'See covid-19 information',
	aliases: ['creategiveaway', 'giveaway-create', 'create-giveaway'],
	usage: 'covid <location>',
	cooldown: 1,
		async execute(message, args, bot) {
  if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let countries = args[1]
            const noArgs = new Discord.MessageEmbed()
                .setTitle('Missing arguments')
                .setColor(0xFF0000)
                .setDescription('You are missing some args (ex: covid all || covid Indonesia)')
                .setTimestamp()

            if (!args[0]) return message.channel.send(noArgs);

            if (!args[1]) {
                fetch(`https://covid19.mathdro.id/api`)
                    .then(response => response.json())
                    .then(data => {
                        let confirmed = data.confirmed.value.toLocaleString()
                        let recovered = data.recovered.value.toLocaleString()
                        let deaths = data.deaths.value.toLocaleString()

                        const embed = new Discord.MessageEmbed()
                            .setTitle(`Worldwide COVID-19 Stats 🌎`)
                            .addField('Confirmed Cases', confirmed)
                            .addField('Recovered', recovered)
                            .addField('Deaths', deaths)
                            .setColor("RANDOM")

                        message.channel.send(embed)
                    })
            } else {
                fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
                    .then(response => response.json())
                    .then(data => {
                        let confirmed = data.confirmed.value.toLocaleString()
                        let recovered = data.recovered.value.toLocaleString()
                        let deaths = data.deaths.value.toLocaleString()

                        const embed = new Discord.MessageEmbed()
                            .setTitle(`COVID-19 Stats for **${countries}**`)
                            .addField('Confirmed Cases', confirmed)
                            .addField('Recovered', recovered)
                            .addField('Deaths', deaths)
                            .setColor("RANDOM")

                        message.channel.send(embed)
                    }).catch(e => {
                        return message.channel.send('Invalid country provided')
            })
            }
		
	},
}