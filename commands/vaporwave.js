
const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'vaporwave',
	description:'Ｍａｋｅｓ ｔｈｅ ｔｅｘｔ ｌｉｋｅ ｔｈｉｓ' ,
	aliases: ['textsplit'],
	usage: '!vaporwave <text>',
	cooldown: 0,
	async execute(message, args, bot) {
    const aes = args.slice(1).join(' ')
    if(aes.length > 300) return message.channel.send('The text cannot be more than 300 characters')
    if(!aes) return message.channel.send("Provide a message | Usage: !vaporwave <text>")
let res = await fetch(`https://api.deltaa.tk/aesthetic?text=${aes}`)
let data = await res.json()
return message.channel.send(data.aesthetic)
   
	},
};