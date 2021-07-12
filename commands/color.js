const Discord = require('discord.js')
const Canvacord = require('canvacord')
const fetch = require('node-fetch')
module.exports = {
	name: 'color',
	description: 'Shows the color of the hex code',
	aliases: ['colors', 'hex', 'colour'],
	usage: 'color <hex code>',
	cooldown: 0,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
            let colorOfChoice = args.slice(1).join(" ")

            if (!args[1]) return message.channel.send('Provide a valid HEX code ( Example: FF0000) | Usage: hex ff0000 | Without hashtag');

            let image = await Canvacord.color(`#${colorOfChoice}`)

            let color = new Discord.MessageAttachment(image, "color.png")

            message.channel.send(color);
		
	},
};