
const Discord = require('discord.js')
module.exports = {
	name: 'rate',
	description:'Rates you or the person you mentioned' ,
	aliases: ['rating'],
	usage: '!rate <user(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
    let number = Math.floor(Math.random() * 101)
            if (!args[1]) {
                return message.channel.send('I would rate you a ' + number + '/100')
            } else {
                let user = message.mentions.users.first();
                if (!user)  return message.channel.send('Please mention who you are rating.')
                   message.channel.send('I would rate ' + user.username + ' a ' + number + '/100')
                
                }
               
            
           
	},
};