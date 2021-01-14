
const Discord = require('discord.js')
const weather = require('weather-js')
module.exports = {
	name: 'weather',
	description:'Show information about weather in a location' ,
	aliases: ['weathers'],
	usage: '!weather <location>',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            weather.find({ search: args.join(" "), degreeType: 'C' }, function (error, result) {
                if (error) return message.channel.send(error);
                if (!args[1]) return message.channel.send('Please specify a location | Usage: !weather {location}')

                if (result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

                var current = result[0].current;
                var location = result[0].location;

                const weatherinfo = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor(`Weather forecast for ${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .setColor(0x111111)
                    .addField('Timezone', `UTC${location.timezone}`, true)
                    .addField('Degree Type', 'Celsius', true)
                    .addField('Temperature', `${current.temperature}°`, true)
                    .addField('Wind', current.winddisplay, true)
                    .addField('Feels like', `${current.feelslike}°`, true)
                    .addField('Humidity', `${current.humidity}%`, true)


                message.channel.send(weatherinfo)
            })
          
	},
};