
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
	name: 'timer',
	description:'Makes a timer and will ping when the timer ends' ,
	aliases: ['timers'],
	usage: '!timer <time>',
	cooldown: 1,
	execute(message, args, bot) {
     const person = message.author
            const time = args[1];
            if (!time)
                return message.reply('What time? | Usage: !timer 30s');
            message.channel.send(`Sucess! You have a timer for ${ms(ms(time))}`);
            setTimeout(function () {
                message.channel.send(`${person}, your timer is up!`)
            }, ms(time))
    
          
	},
};