
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'wanted',
	description:'Sends a wanted image' ,
	aliases: ['danger'],
	usage: '!wanted <user(optional>',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvacord.wanted(avatar);
        let want = new Discord.MessageAttachment(image, "wanted.png");
        return message.channel.send(want);
       
              
	},
};