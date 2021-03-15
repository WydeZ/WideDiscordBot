
const Discord = require('discord.js')
module.exports = {
	name: 'willow',
	description:'Willow so cute' ,
	aliases: ['willows'],
	usage: '!willow',
	cooldown: 1,
	execute(message, args, bot) {
         let developers = ['719507348137181254', '717360270837809172', '592560471572217866', '608642911097192478'];
  if(!developers.includes(message.author.id)) return 
    if(args[1] === "sad"){
      return  message.channel.send('Willow is sad 😿😿 https://ibb.co/zH8pqqG')
    } else   if(args[1] === "princess"){
      return   message.channel.send('Willow is a princess 👸🐱 https://ibb.co/DpF7hrf')
    } else if(args[1] === "mad"){
      return   message.channel.send('Willow ANGRY REOW 😾😾 https://ibb.co/84YzYGj')
    } else {
     let numberrs = Math.floor(Math.random() * 15);
            if (numberrs == 0) {
                return message.channel.send('Reoww 🐱 https://ibb.co/k2bNDsr')
            }
            if (numberrs == 1) {
                return message.channel.send('Willow 🥰🥰 https://ibb.co/K0yq8QN')
            }
            if (numberrs == 2) {
                return message.channel.send('Willow makes everything better 🐱🥰 https://ibb.co/BjBSHrd')
            }
            if (numberrs == 3) {
                return message.channel.send('Meow https://ibb.co/5TB0Ff9')
            }
            if (numberrs == 4) {
                return message.channel.send('Willow so cute 🥰🥰 https://ibb.co/p2c1CKQ')
            }
            if (numberrs == 5) {
                return message.channel.send('Willow 🥰🥰 https://ibb.co/pLwcGNc')
            }
            if (numberrs == 6) {
                return message.channel.send('Willow makes everything better 🐱🥰 https://ibb.co/52Q3ZsT')
            }
            if (numberrs == 7) {
                return message.channel.send('Meow  https://ibb.co/tB57Z1Z')
            }
            if (numberrs == 8) {
                return message.channel.send('Reoww https://ibb.co/bPRB3hW')
            }
            if (numberrs == 9) {
                return message.channel.send('Willow 🥰🥰https://ibb.co/8MDfbsT')
            }
            if (numberrs == 10) {
                return message.channel.send('Meowww Reoww https://ibb.co/zQK41Pv')
            }
            if (numberrs == 11) {
                return message.channel.send('🐱🐈😻 https://ibb.co/q5M1nMk')
            } if (numberrs == 12) {
                return message.channel.send('Willow so cute https://ibb.co/PtvrkjV')
            } if (numberrs == 13) {
                return message.channel.send('I love willow 🥰🥰 https://ibb.co/SVdfpCX')
            } if (numberrs == 14) {
                return message.channel.send("Aww what a cute cat🐱🥰https://ibb.co/BjSkf65")
            }
    }
 
          
	},
};