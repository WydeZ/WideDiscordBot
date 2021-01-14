
const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'fancy',
	description:'Makes a text fancy' ,
	aliases: ['fancyfont'],
	usage: '!fancy <text>',
	cooldown: 1,
		async execute(message, args, bot) {
       const aes = args.slice(1).join(' ')
    if(!aes) return message.channel.send("Provide a message | Usage: !fancy <text>")
let res = await fetch(`https://api.deltaa.tk/fancy?text=${aes}`)
let data = await res.json()
return message.channel.send(data.fancy)
	},
};