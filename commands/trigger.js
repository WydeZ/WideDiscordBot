
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'trigger',
	description:'Sends a trigger image' ,
	aliases: ['triggers'],
	usage: '!trigger <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
     
          
	},
};