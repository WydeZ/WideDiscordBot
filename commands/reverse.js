
const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'reverse',
	description:'Reverse a text' ,
	aliases: ['reverseword'],
	usage: '!reverse <text>',
	cooldown: 0,
	async execute(message, args, bot) {
    const aes = args.slice(1).join(' ')
    if(!aes) return message.channel.send("Provide a message | Usage: !reverse <text>")
let res = await fetch(`https://api.deltaa.tk/reverse?text=${aes}`)
let data = await res.json()
return message.channel.send(data.reverse)
   
	},
};