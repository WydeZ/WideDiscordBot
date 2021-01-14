const Discord = require('discord.js')
const Jumble = require("jumble-words");
module.exports = {
	name: 'jumble',
	description: 'Bot gives you a jumbled word that you must unscramble in a limited amount of time',
	aliases: ['scramble', 'jumble-words'],
	usage: '!links',
	cooldown: 1,
		async execute(message, args, bot) {
      const filter = m => m.author.id === message.author.id;
            const word = jumble.generate(1);
            await message.channel.send(`Your word is **${word[0].jumble}**.`);

            message.channel.awaitMessages(filter, {
                max: 1,
                error: ["time"],
                time: 20000
            })
                .then(collected => {
                    const m = collected.first();
                    if (m.content.toLowerCase() !== word[0].word.toLowerCase()) return message.channel.send(`Invalid word. The correct word was **${word[0].word}**.`);
                    return message.channel.send(`Your guess was correct! The word was **${word[0].word}**.`)
                })
                .catch(collected => {
                    message.channel.send(`You didn't answer in time, the correct word was **${word[0].word}**.`)
                })
 
	},
};