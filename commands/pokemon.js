
const Discord = require('discord.js')
const { Spawn } = require("pokecord");
module.exports = {
	name: 'pokemon',
	description:'Bot will send a pokemon image, and you have to guess what it is!' ,
	aliases: ['pokemongame'],
	usage: 'pokemon',
	cooldown: 1,
		async execute(message, args, bot) {
if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
     if (!message.guild.me.hasPermission("ATTACH_FILES")) return message.channel.send('I do not have the right permission: Attach Files')
            const pokemon = await Spawn().catch(e => { });
            if (!pokemon) return message.channel.send("Opps! Something went wrong, please try again later :( | Bug Maybe? Report it using the !bug command OR join our support server https://discord.gg/eqjuTv8");
            const filter = m => m.author.id === message.author.id;


            const embed = new Discord.MessageEmbed()
                .setAuthor("Guess the pokemon")
                .setColor("#FFFF00")
                .setImage(pokemon.imageURL)
                .setFooter('Type your guess below! | You have 20 seconds');

            await message.channel.send(embed);

            message.channel.awaitMessages(filter, {
                max: 1,
                error: ["time"],
                time: 20000
            })
                .then(collected => {
                    const m = collected.first();
                    if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase())
                        return message.channel.send(`❌ | Incorrect guess! | The correct answer was **${pokemon.name}**!`)

                    return message.channel.send(`✅ **| Correct guess! Well Done!**`);
                })
                .catch(() => {
                    message.channel.send(`❌ | You did not answer in time. The correct answer was **${pokemon.name}**!`);
                });
       
              
	},
};