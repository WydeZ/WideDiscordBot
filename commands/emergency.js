
const Discord = require('discord.js')
module.exports = {
	name: 'emergency',
	description: 'An among us emergency image' ,
	aliases: ['emgy'],
	usage: '!emergency <text>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let Text = args.slice(1).join(" ");

            if (!Text) return message.channel.send(`Please provide a text | Usage: !emergency {text}`);

            if (Text.length > 500) return message.channel.send(`The character limit is 500`);

            let Link = `https://vacefron.nl/api/emergencymeeting?text=${Text}`;

            let Embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(Link)
                .setTimestamp();

            message.channel.send(Embed);
   

         
              
	},
};