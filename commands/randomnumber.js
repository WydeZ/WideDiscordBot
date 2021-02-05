
const Discord = require('discord.js')
const random = require('random')
module.exports = {
	name: 'randomnumber',
	description:'Bot picks a random number between any number you choose' ,
	aliases: ['roll', 'rannum', 'ranum'],
	usage: '!randomnumber <number>',
	cooldown: 1,
	execute(message, args, bot) {
       let hi = args[1]
     let number = Math.floor(Math.random() * 101)
            if (!args[1]) {
               if (isNaN(hi)) return message.channel.send('It must be a number')
                return message.channel.send(`Your random number is __**${number}**__  (**1-100**)`)
            } else if(!args[2]){
                let hi = args[1]
                if (isNaN(hi)) return message.channel.send('It must be a number | Usage: !randomnumber <number>')
                let bruh = Math.floor(Math.random() * `${hi}`)
                return message.channel.send(`Your random number is __**${bruh}**__  (**1-${hi}**)`)
            } else if(args[2]){
         if (isNaN(args[1])) return message.channel.send('It must be a number')
          if (isNaN(args[2])) return message.channel.send('It must be a number | Exameple: !ranum 20 30')
          if(+args[1] > +args[2]) return message.channel.send('The first number must be smaller than the second number')
             
          message.channel.send(`Your random number is __**${random.int(min = +args[1], max = +args[2])}**__  (**${args[1]}-${args[2]}**)`)
            }
          
	},
};