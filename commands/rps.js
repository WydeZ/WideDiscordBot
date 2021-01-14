const Discord = require('discord.js')
module.exports = {
	name: 'rps',
	description: 'Play rock paper scissors with a me!',
	aliases: ['rockpaperscissors'],
	usage: '!rps <rock/paper/scissors>',
	cooldown: 1,
	execute(message, args, bot) {
    if (!args[1]) {
                return message.channel.send('Please include your choice | Usage: !rps {rock/paper/scissors}');
            }

            let choices = ['rock', 'paper', 'scissors'];
            if (choices.includes((args[1]).toLowerCase())) {
                let number = Math.floor(Math.random() * 3);
                if (number == 1) {
                    return message.channel.send('It was a tie, we both had ' + (args[1]).toLowerCase())
                };
                if (number == 2) {
                    if ((args[1]).toLowerCase() == "rock") {
                        return message.channel.send('I won, I had paper')
                    };
                }
                if ((args[1]).toLowerCase() == "paper") {
                    return message.channel.send('I won, I had scissors')
                };
                if ((args[1]).toLowerCase() == "scissors") {
                    return message.channel.send('I won, I had rock')
                };

                if (number == 0) {
                    if ((args[1]).toLowerCase() == "rock") {
                        return message.channel.send('You won, I had scissors')
                    }
                };
                if ((args[1]).toLowerCase() == "paper") {
                    return message.channel.send('You won, I had rock')
                };
                if ((args[1]).toLowerCase() == "scissors") {
                    return message.channel.send('You won, I had paper')
                };


            } else {
                return message.channel.send('Please include either: Rock, Paper, or Scissors | Usage: !rps {rock/paper/scissors}')
            }

    
	
	},
};