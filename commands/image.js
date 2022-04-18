const Discord = require('discord.js')
const google = require('googlethis');
module.exports = {
	name: 'image',
	description: 'Shows an image of your choice',
	aliases: ['picture', 'img'],
	usage: 'image <word>',
	cooldown: 1,
	async execute(message, args, bot) {
	  if(!args[1]) return message.channel.send('Please provide to me something to search | Usage: image <word>')

 let oop = args.slice(1).join(" ")
                let badWord = ['nude', 'boob', 'sex', 'porn', 'dick', 'penis']
                for (var i = 0; i < badWord.length; i++) {
                    if (oop.includes(badWord[i])) {
                        return message.channel.send('**Please search for something else** :x:')
                    }
                }
  if(oop.length > 15) {
    return message.channel.send('Please keep it below 15 characters!')
  }
  
     const images = await google.image(oop, { safe: true });
        // Send result
       let embed = new Discord.MessageEmbed()
                .setTitle(`Here is your image!`)
                .setImage(images[0].url)
                .setColor('ORANGE')
      
  message.channel.send(embed).catch((err) => {
    message.channel.send('There were no results for your image! Please try a different word. | Bug maybe? Use the bug command to report!')
  })
    },
}