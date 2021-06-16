
const Discord = require('discord.js')
module.exports = {
	name: 'dump',
	description: 'See which people has the specified role' ,
	aliases: ['rolememberlist'],
	usage: '!dump <roleID>',
	cooldown: 1,
		async execute(message, args, bot) {
          let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
          if(!role) return message.channel.send('Please specify a role by mentioning it or via ID!')
      let oop = message.guild.members.cache.filter(member => { 
        return member.roles.cache.get(role.id);
    }).map(member => {
        return member.user.tag
    })
  
        let hehe= message.guild.members.cache.filter(member => { 
        return member.roles.cache.get(role.id);
    }).map(member => {
        return member.user.id
    })
        message.channel.send(`${oop.join("\n")} (${hehe.join("\n")})`)

   
         
              
	},
};