
const Discord = require('discord.js')
const hastebin = require('hastebin-gen')
module.exports = {
	name: 'discrim',
	description:'Shows the people who has the same discrim as you' ,
	aliases: ['sametag'],
	usage: '!discrim <your tag>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            const query = args[1];
            if (!query) return message.channel.send("Please include a discriminator! | Usage: !discrim {your tag} | eg: !discrim 0001");

            const users = bot.users.cache.filter(user => user.discriminator === query).map(m => m.tag);
            if (!users.length) return message.channel.send(`No users found with discriminator **#${query}**!`);

    
const embed = new Discord.MessageEmbed()
                        .setTitle(`${users.length} Users found with discriminator #${query}`)
                        .setDescription(users.join("\n"))
                    message.channel.send(embed)
                .catch((err) => {
                   hastebin(users.join("\n"))
                .then(haste => {
                    message.channel.send(`${users.length} Users found with discriminator **#${query}**!\n${haste}`);
                })         
                })
             
	},
};