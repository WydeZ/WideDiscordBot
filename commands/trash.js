
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'trash',
	description:'Sends a trash image' ,
	aliases: ['trashed'],
	usage: 'trash <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
      if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var yay = message.mentions.users.first() || message.author
        let avatar = yay.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.trash(avatar);
        let trashed = new Discord.MessageAttachment(image, "trash.png");
        return message.channel.send(trashed);
     
          
	},
};