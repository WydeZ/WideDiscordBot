
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'blur',
	description:'Sends a blur image' ,
	aliases: ['blurred'],
	usage: '!blur <user(optional>',
	cooldown: 1,
	async execute(message, args, bot) {
        if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.blur(avatar);
        let blurred = new Discord.MessageAttachment(image, "wasted.png");
        return message.channel.send(blurred);
               
	},
};