const Discord = require('discord.js')
module.exports = {
	name: 'roast',
	description: 'Sends a random roast',
	aliases: ['burn'],
	usage: '!roast',
	cooldown: 1,
	execute(message, args, bot) {

    let numberr = Math.floor(Math.random() * 12);
            if (numberr == 0) {
                return message.channel.send('If a brick🧱 smacked you in the face, the world will be a better place 🌏')
            }
            if (numberr == 1) {
                return message.channel.send('ur ugly')
            }
            if (numberr == 2) {
                return message.channel.send('🗑 <--- That is you')
            }
            if (numberr == 3) {
                return message.channel.send('Wake me up when I care 😒')
            }
            if (numberr == 4) {
                return message.channel.send('Roses are red🌹, Violets are blue🔵, Everyone agrees that we dont like you :D')
            }
            if (numberr == 5) {
                return message.channel.send('7 Billion People, 7 Oceans 🌊 , 196 countries🌏. And Im friends with a cow like you🐄')
            }
            if (numberr == 6) {
                return message.channel.send('Did someone call me? Meh, whatever')
            }
            if (numberr == 7) {
                return message.channel.send('Twinkle, twinkle, little star 🌟, Ill hit you with a metal bar, Push you off a plane so high ✈, Laugh at you when your falling in the sky⛅, Alot of people dont like you, Dont worrt Im one of them too:)')
            }
            if (numberr == 8) {
                return message.channel.send('Your so ugly that when you were born your parents were like "What a treasure!" -> "Yeah lets burry it"')
            }
            if (numberr == 9) {
                return message.channel.send('If your name is not Google stop acting like you know everything.')
            }
            if (numberr == 10) {
                return message.channel.send('If you ran like your mouth you would be in good shape. ')
            }
            if (numberr == 11) {
                return message.channel.send('Too bad you cant photoshop your personality :(')

            } else {
                let user = message.mentions.users.first();
                if (!user) {
                    return message.channel.send('Please mention who you are roasting')
                }
                if (numberr == 0) {
                    return message.channel.send('If a brick🧱 smacked you in the face, the world will be a better place 🌏')
                }
                if (numberr == 1) {
                    return message.channel.send('ur ugly')
                }
                if (numberr == 2) {
                    return message.channel.send('🗑 <--- That is you')
                }
                if (numberr == 3) {
                    return message.channel.send('Wake me up when I care 😒')
                }
                if (numberr == 4) {
                    return message.channel.send('Roses are red🌹, Violets are blue🔵, Everyone agrees that we dont like you :D')
                }
                if (numberr == 5) {
                    return message.channel.send('7 Billion People, 7 Oceans 🌊 , 196 countries🌏. And Im friends with a cow like you🐄')
                }
                if (numberr == 6) {
                    return message.channel.send('Did someone call me? Meh, whatever')
                }
                if (numberr == 7) {
                    return message.channel.send('Twinkle, twinkle, little star 🌟, Ill hit you with a metal bar, Push you off a plane so high ✈, Laugh at you when your falling in the sky⛅, Alot of people dont like you, Dont worrt Im one of them too:)')
                }
                if (numberr == 8) {
                    return message.channel.send('Your so ugly that when you were born your parents were like "What a treasure!" -> "Yeah lets burry it"')
                }
                if (numberr == 9) {
                    return message.channel.send('If your name is not Google stop acting like you know everything.')
                }
                if (numberr == 10) {
                    return message.channel.send('If you ran like your mouth you would be in good shape. ')
                }
                if (numberr == 11) {
                    return message.channel.send('Too bad you cant photoshop your personality :(')

                }
            };
    

    
	
	},
};