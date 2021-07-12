
const Discord = require('discord.js')
const math = require('mathjs');
module.exports = {
	name: 'wcalc',
	description:'A calculator' ,
	aliases: ['wcalculator', 'calc', 'calculator'],
	usage: 'wcalc <question>',
	cooldown: 1,
		async execute(message, args, bot) {
               if (!args[1]) return message.channel.send('Usage: calc <question> | eg: calc 1+1')
     let oop = args.slice(1).join(" ")
                let baby = ['config', ':']
                for (var i = 0; i < baby.length; i++) {
                    if (oop.includes(baby[i])) {
                        return message.channel.send('Try a different equation!')
                    }
                }

               
            let resp;
            try {
                resp = math.evaluate(args.slice(1).join(" "))
            } catch (e) {
                return message.channel.send("That's not a valid equation!")
            }
 
            const embed = new Discord.MessageEmbed()
                .setColor("#000000")
                .addField('Question', `\`\`\`css\n${args.slice(1).join('')}\`\`\``)
                .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
            message.channel.send(embed);
          
	},
};