
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'grayscale',
	description:'Sends a grayscale image' ,
	aliases: ['greyscale'],
	usage: 'grayscale <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.greyscale(avatar);
        let grey = new Discord.MessageAttachment(image, "gray.png");
        return message.channel.send(grey);
              
	},
};