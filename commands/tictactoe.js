const Discord = require('discord.js')
const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en',})
module.exports = {
	name: 'tictactoe',
	description:'Play a classic game of tic tac toe!' ,
	aliases: ['ttt'],
	usage: 'ttt <mention(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
    game.handleMessage(message);        
	},
};