
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'delete',
	description:'Sends a delete image' ,
	aliases: ['deleted'],
	usage: '!delete <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
        if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var userr = message.mentions.users.first() || message.author
        let avatar = userr.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.delete(avatar);
        let attachment = new Discord.MessageAttachment(image, "deleted.png");
        return message.channel.send(attachment);        
	},
};