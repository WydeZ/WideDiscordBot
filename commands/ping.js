const Discord = require('discord.js')
module.exports = {
	name: 'ping',
	description: 'Shows the ping and API latency of the bot',
	aliases: ['latency'],
	usage: 'ping',
	cooldown: 1,
		async execute(message, args, bot) {

     message.channel.send('Pong! 🏓').then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp

     m.edit(`Pong! 🏓 | That took ${ping} ms |  API Latency is ${Math.round(bot.ws.ping)}ms`)})
	
	},
};