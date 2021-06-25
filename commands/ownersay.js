
const Discord = require('discord.js')
module.exports = {
	name: 'ownersay',
	description: '.' ,
	aliases: ['ownersay'],
	usage: '[command name]',
	cooldown: 1,
	execute(message, args, bot) {
  if(message.author.id === '719507348137181254'){
     let arg = args.slice(1).join(' ')
     message.delete()
     if(!arg) return messge.reply('Please specify something!')
            return message.channel.send(`${arg}`)
            
  } else return 
	},
};