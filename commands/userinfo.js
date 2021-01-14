
const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
	name: 'userinfo',
	description:'Get the general information about the user or your profile' ,
	aliases: ['profile'],
	usage: '!userinfo <user(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
       if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            let user = message.mentions.users.first() || message.author;
            const joinDiscord = moment(user.createdAt).format('llll');
            const joinServer = moment(user.joinedAt).format('llll');
            const embed = new Discord.MessageEmbed()
                .setTitle('User Info')
                .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
                .setThumbnail(user.displayAvatarURL())
                .setColor(`RANDOM`)
                .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
                .addField('Status:', user.presence.status, true)
                .addField('Current Server', message.guild.name)
                .addField(`ID: ${user.id}`)
                .setTimestamp();

            message.channel.send(embed);
    
          
	},
};