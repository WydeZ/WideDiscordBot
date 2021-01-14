
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'pixelate',
	description:'Sends a pixelated image' ,
	aliases: ['pixel', 'pixelated'],
	usage: '!pixelate <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
         if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.pixelate(avatar);
        let pixelate = new Discord.MessageAttachment(image, "pixelate.png");
        return message.channel.send(pixelate);   
              
	},
};