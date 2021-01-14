
const Discord = require('discord.js')
module.exports = {
	name: 'eject',
	description: 'An among us eject image' ,
	aliases: ['ejected'],
	usage: '!eject <user>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let Member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);

            if (!Member) return message.channel.send(`Please mention a valid user via Mention or ID | Usage: !eject {user}`);

            let Colors = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"];

            let Colord = Colors[Math.floor(Math.random() * Colors.length)];

            let Imposter = [true, false];

            let Impost = Imposter[Math.floor(Math.random() * Imposter.length)];

            let Link = `https://vacefron.nl/api/ejected?name=${Member.user.username.replace("  ", "").split(" ").join("+")}&impostor=${Impost}&crewmate=${Colord}`;

            let Embed = new Discord.MessageEmbed()
                .setColor(Colord.toUpperCase())
                .setTitle(`**${message.author.username}** Decided To Eject **${Member.user.username}**`)
                .setImage(Link)
                .setTimestamp();

            message.channel.send(Embed)

         
              
	},
};