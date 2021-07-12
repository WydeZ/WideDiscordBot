const Discord = require('discord.js');
const { Database } = require("quick.replit");
const gdb = new Database(process.env.REPLIT_DB_URL)

module.exports = {
  name: 'setchatbotchannel',
        description: 'Sets a ChatBot Channel',
        aliases: ["setchatch"], 
        usage: '!setchatbotchannel <channel>',
	cooldown: 3,
	async execute(message, args, bot) {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed: {
            color: 'RED',
            title: `You do not have the required Permissions! - Manage Server `
        }})
if (!args[1]) {
  let b = await gdb.fetch(`chatbot_${message.guild.id}`);
  let channelName = message.guild.channels.cache.get(b);
  if (message.guild.channels.cache.has(b)) {
    return message.channel.send(
      `**ChatBot Channel Set In This Server Is \`${channelName.name}\`!**`
    );
  } else
    return message.channel.send({embed: {
            color: 'RED',
            title: `Please Enter a Channel ID or ID to set | Usage: setchatbotchannel (channel)`
        }})
}
    let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());

    if (!channel || channel.type !== 'text') return message.channel.send({embed: {
            color: 'RED',
            title: `Please Enter a Valid Text Channel`
        }})
        if(!channel.viewable) return message.channel.send("I can't see that channel!")

    try {
        let a = await gdb.fetch(`chatbot_${message.guild.id}`)

        if (channel.id === a) {
            return message.channel.send({embed: {
            color: 'RED',
            title: `This Channel is already set as ChatBot Channel!`
        }})
        } else {
            bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send(`**ChatBot Channel Set!**`)
            gdb.set(`chatbot_${message.guild.id}`, channel.id)

           message.channel.send('Credits to Mori Delta#6969' ,{embed: {
            color: 'GREEN',
            title: `ChatBot Channel has been Set Successfully \`${channel.id}\``
           }})
        }
    } catch {
        return message.channel.send(`**Error - Missing Permissions Or Channel Is Not A Text Channel!**`);
    }

	
	},
};