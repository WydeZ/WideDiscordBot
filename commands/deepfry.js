
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'deepfry',
	description:'Sends a deepfry image' ,
	aliases: ['deepfried'],
	usage: '!deepfry <user(optional)>',
	cooldown: 1,
		async execute(message, args, bot) {
     if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var deepfryy = message.mentions.users.first() || message.author
        let avatar = deepfryy.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.deepfry(avatar);
        let deepfried = new Discord.MessageAttachment(image, "deepfry.png");
        return message.channel.send(deepfried);
              
	},
};