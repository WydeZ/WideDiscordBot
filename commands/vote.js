
const Discord = require('discord.js')
const querystring = require('querystring')
module.exports = {
	name: 'vote',
	description:'Link to vote me!' ,
	aliases: ['votes', 'votelink'],
	usage: 'vote',
	cooldown: 0,
	execute(message, args, bot) {
        message.channel.send('Upvote the bot here: https://top.gg/bot/729537680257450104/vote')    
	},
};