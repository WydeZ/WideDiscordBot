
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'changemymind',
	description:'Sends a changemymind image' ,
	aliases: ['cmm'],
	usage: '!changemymind <text>',
	cooldown: 1,
	async execute(message, args, bot) {
         if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var arg = message.content.split(" ").slice(1).join(" ")
        if (!args[1]) return message.channel.send('You need to provide a message | Usage Example: !changemymind WideIrenaKan1 is the best')
        let image = await Canvacord.changemymind(arg);
        let changeMyMind = new Discord.MessageAttachment(image, "cm.png")
        message.channel.send(changeMyMind)
              
	},
};