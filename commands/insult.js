
const Discord = require('discord.js')
const api = require('random-stuff-api')
module.exports = {
	name: 'insult',
	description:'Sends a random insult' ,
	aliases: ['insulting', 'roast'],
	usage: '!insult',
	cooldown: 0,
	execute(message, args, bot) {
    const verysadcat = bot.emojis.cache.get("808192571423195206")
      const sosadcat = bot.emojis.cache.get("808192517362941982")
    let person = message.mentions.users.first() ||message.author 
    if(person.id === bot.user.id){
      return message.channel.send(`${message.author}, why would you want to insult me ${verysadcat}${sosadcat}`)
    }
        api.random.insult().then(insult => {
                message.channel.send(`${person}, ${insult}`)
            })      
	},
};