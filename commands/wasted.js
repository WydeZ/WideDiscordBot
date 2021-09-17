
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'wasted',
	description:'Sends a wasted image' ,
	aliases: ['danger'],
	usage: 'wasted <user(optional>',
	cooldown: 1,
		async execute(message, args, bot) {
        if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.wasted(avatar);
        let waste = new Discord.MessageAttachment(image, "wasted.png");
        return message.channel.send(waste);
              
	},
};