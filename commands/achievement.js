
const Discord = require('discord.js')
module.exports = {
	name: 'achievement',
	description:'Sends a custom minecraft achievement' ,
	aliases: ['achieve', 'ach'],
	usage: 'achievement <text>',
	cooldown: 1,
	async execute(message, args, bot) {
    let text = args.slice(1).join("+")
    		const response = Math.floor(Math.random(1 - 39) * 39);
    if(!args[1]) return message.channel.send('Please provide some text. | Usage: achievemnt <text>')
    if(args.length > 21) return message.channel.send('Your text cannot be more than 21 characters')
    const embed = new Discord.MessageEmbed()
    .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=${response}&h=Achievement+Unlocked%21&t=${text}`)
    .setColor("RANDOM")
    message.channel.send(embed)
   
         
          
	},
};