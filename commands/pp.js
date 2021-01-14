
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'pp',
	description:'oop' ,
	aliases: ['peepoo'],
	usage: '!pp <user(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let sizes = [
                "8D",
                "8=D",
                "8==D",
                "8===D",
                "8====D",
                "8=====D",
                "8======D",
                "8=======D",
                "8========D",
                "8=========D",
                "8==========D",
                "8===========D",
                "8============D",
                "8=============D",
                "8==============D",
                "8===============D",
                "8================D"
            ];

            let Member =
                message.mentions.users.first() ||
                message.author;

            let Result = sizes[Math.floor(Math.random() * sizes.length)];

            const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`Pp Machine`)
                .setDescription(`${Member.username} pp Size Is\n${Result}`)
                .setFooter(`Requested by ${message.author.username}`)
                .setTimestamp();

            message.channel.send(embed);
       
              
	},
};