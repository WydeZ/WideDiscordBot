
const Discord = require('discord.js')
const api = require('pet-pet-gif')

module.exports = {

	name: 'pat',
	description: 'Pat a person' ,
	aliases: ['pats'],
	usage: '!pat <user(optional)>',
	cooldown: 1,
	async execute(message, args, bot) {
    message.channel.send('Please wait, this may take a while')
   if (message.attachments.first()) {

      if (message.attachments.first().name.endsWith('.png') || message.attachments.first().name.endsWith('.jpg')) {

        let img = await api(message.attachments.first().url);

        let file = new Discord.MessageAttachment(img, 'petpet.gif');

        message.channel.send(file);

      }

      } else {

        let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;

        let img = await api(member.displayAvatarURL({ dynamic: true, format: 'png' }));

        let file = new Discord.MessageAttachment(img, 'petpet.gif');

        message.channel.send(file);

      }
    }
}




