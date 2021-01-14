
const Discord = require('discord.js')
module.exports = {
	name: 'npm',
	description:'Shows you information about an npm package' ,
	aliases: ['npminfo'],
	usage: '!npm <package name>',
	cooldown: 1,
	async execute(message, args, bot) {
   if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')

   const fetch = require("node-fetch");

 const package = args[1];
        if(!package) {
            return message.channel.send(
                ':x: Please provide a valid package.',
            );
        }

        let response;
        try {
            response = await fetch('https://api.npms.io/v2/search?q=' + args[1]).then(res => res.json());
        }
        catch (e) {
            return message.channel.send(
                ':x: An error occured, please try again!',
            );
        }

        try{
            const pkg = response.results[0].package;
            const embed = new Discord.MessageEmbed()
                .setTitle(pkg.name)
                .setThumbnail('https://images-ext-2.discordapp.net/external/ouvh4fn7V9pphARfI-8nQdcfnYgjHZdXWlEg2sNowyw/https/cdn.auth0.com/blog/npm-package-development/logo.png')
                .setURL(pkg.links.npm)
                .setDescription(pkg.description)
                .addFields(
                    { name: '》 Author :', value: pkg.author ? pkg.author.name : 'None' },
                    { name: '》 Version :', value: pkg.version },
                    { name: '》 Repository :', value: pkg.links.repository ? pkg.links.repository : 'None' },
                    { name: '》 Maintainers :', value: pkg.maintainers ? pkg.maintainers.map(e => e.username).join(', ') : 'None' },
                    { name: '》 Keywords :', value: pkg.keywords ? pkg.keywords.join(', ') : 'None' },
                )
                .setColor('FF0000')
                                .setTimestamp();

            message.channel.send(embed);
        }
        catch (e) {
            return message.channel.send(
                ':x: Please provide a valid package.',
            );
        }
        

            
	},
};