const Discord = require('discord.js')
const { hangman } = require('reconlx')
module.exports = {
	name: 'hangman',
	description: 'Play hangman with friends!',
	aliases: ['hangm'],
	usage: 'hangman <channel> <text>',
	cooldown: 5,
		async execute(message, args, bot) {
           
  if(!message.member.roles.cache.some(role => role.name === "Hangman Creator" )) return message.channel.send('You need  to have the role named **"Hangman Creator"** (Make one if you do not have. (case sensitive))')
     if (!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('I do not have the right permission: Add Reactions')

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if(!channel) return message.channel.send('Please specify a channel | Usage: hangman <channel> <word>')
        const word = args.slice(2).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess. Usage: !hangman <channel> <word>')
        if(!channel.viewable) return message.channel.send("I can't access the channel! Please make sure I have send and read message permission in that channel or try a different channel")

         let oop = args.slice(2).join(" ")
                let baby = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '?', '>', '<', '[', ']', ';', ',', ':', '`', '~', '=', '+', '-', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!']
                for (var i = 0; i < baby.length; i++) {
                    if (oop.includes(baby[i])) {
                        return message.channel.send('The message must only contain words from the english alphabet (Must contain only letters)')
                    }
                }

                 if (oop.length > 40) {
                    return message.channel.send('It must be under 40 characters.')
                 }

        const hang = new hangman({
            message: message,
            word: word,
            client: bot,
            channelID: channel.id,
        })
if(channel != null){
        hang.start().catch((err) => {
                            message.channel.send('I was unable to make the Hangman. Make sure I have the correct permissions in the mentioned channel')
                        })
                    } else {
                        message.reply("No channel with the id `" + args[1] + "` exist! \n" + 'Usage: !hangman <channel> <word>')
                    }


    },
}