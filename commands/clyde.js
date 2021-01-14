
const Discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
	name: 'clyde',
	description:'Sends a clyde image' ,
	aliases: ['clydes'],
	usage: '!clyde <text>',
	cooldown: 1,
	async	execute(message, args, bot) {
       if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
        var arg = message.content.split(" ").slice(1).join(" ")
        if (!args[1]) return message.channel.send('You need to provide a message | Usage Example: !clyde Hi')
        let image = await Canvacord.clyde(arg);
        let changeMyMind = new Discord.MessageAttachment(image, "cm.png")
        message.channel.send(changeMyMind)
               
	},
};