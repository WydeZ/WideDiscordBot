
const Discord = require('discord.js')
var Owlbot = require('owlbot-js');
  
var dowl = Owlbot(process.env.DTOKEN);
module.exports = {
	name: 'define',
	description:'Gives the definition of something' ,
	aliases: ['definition', 'meaning', 'meaningof'],
	usage: 'define <word>',
	cooldown: 1,
		async execute(message, args, bot) {
      var word = args[1]
      if(!word) return message.channel.send('Please specify a word for me to define! | Usage: define <word>')
      dowl.define(word).then(function(result){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${word.toLowerCase()}`)
   .addField("Definition", result.definitions[0].definition)
   .addField('Type', result.definitions[0].type)
   .addField('Example', result.definitions[0].example)
      .setThumbnail( "https://media.wnyc.org/i/800/0/c/85/1/468930605.jpg")
   .setColor('ORANGE')
   message.channel.send(embed)
  
}).catch((err) => {
  message.channel.send(':x: That is not a valid word! Please try again.')
})
         
	},
};