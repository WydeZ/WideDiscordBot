
const Discord = require('discord.js')
module.exports = {
	name: 'randomnumber',
	description:'Bot picks a random number between any number you choose' ,
	aliases: ['roll', 'rannum', 'ranum'],
	usage: '!randomnumber <number>',
	cooldown: 1,
	execute(message, args, bot) {
     let number = Math.floor(Math.random() * 101)
            if (!args[1]) {
                return message.channel.send(`I have picked a number between **1 and 100**, your number is ||${number}||`)
            } else {
                let hi = args[1]
                if (isNaN(hi)) return message.channel.send('It must be a number')
                let bruh = Math.floor(Math.random() * `${hi}`)
                return message.channel.send(`I have picked a number between **1 and ${hi}**, your random number is ||${bruh}||`)
            }
          
	},
};