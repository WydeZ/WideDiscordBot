const Discord = require('discord.js')
module.exports = {
	name: 'beautyrate',
	description: 'See how beautiful you are (100% accurate)',
	aliases: ['beautyr'],
	usage: '!beautyrate <user(optional)>',
	cooldown: 1,
	execute(message, args, bot) {
   const percents = ['-1% beautiful (Wtf how did you even get -1%)', '0% beautiful (R.I.P 0%)', '1% beautiful (Your really ugly lol)', '2% beautiful - Only 2% :(', '3% beautiful (Your pretty ugly lol)', '4% beautiful (Your pretty ugly lol)', '5% beautiful (Your pretty ugly lol)', '6% beautiful (Your pretty ugly lol)', '7% beautiful (Your pretty ugly lol)', '8% beautiful (Your pretty ugly lol)', '9% beautiful (Your pretty ugly lol)', '10% beautiful (Your pretty ugly lol)', '11% beautiful (Your pretty ugly lol)', '12% beautiful (Your pretty ugly lol)', '13% beautiful (Your pretty ugly lol)', '14% beautiful (Your pretty ugly lol)', '15% beautiful (Your pretty ugly lol)', '16% beautiful (Your pretty ugly lol)', '17% beautiful (Your pretty ugly lol)', '18% beautiful (Your pretty ugly lol)', '19% beautiful (Your pretty ugly lol)', '20% beautiful (Your pretty ugly lol)', '21% beautiful (Your pretty ugly lol)', '22% beautiful (Your pretty ugly lol)', '23% beautiful (Your pretty ugly lol)', '24% beautiful (Your pretty ugly lol)', '25% beautiful (Your decent)', '26% beautiful (Your decent)', '27% beautiful (Your decent)', '28% beautiful (Your decent)', '29% beautiful (Your decent)', '30% beautiful (Your decent)', '31% beautiful (Your decent)', '32% beautiful (Your decent)', '33% beautiful (Your decent)', '34% beautiful (Your decent)', '35% beautiful (Your decent)', '36% beautiful (Your decent)', '37% beautiful (Your decent)', '38% beautiful (Your decent)', '39% beautiful (Your decent)', '40% beautiful (Your decent)', '41% beautiful (Your decent)', '42% beautiful (Your decent)', '43% beautiful (Your decent)', '44% beautiful (Your decent)', '45% beautiful (Your decent)', '46% beautiful (Your decent)', '47% beautiful (Your decent)', '48% beautiful (Your decent)', '49% beautiful (Your decent)', '50% beautiful (Your Average)', '51% beautiful (Your Average)', '52% beautiful (Your Average)', '53% beautiful (Your Average)', '54% beautiful (Your Average)', '55% beautiful (Your Average)', '56% beautiful (Your Average)', '57% beautiful (Your Average)', '58% beautiful (Your Average)', '59% beautiful (Your Average)', '60% beautiful (Your Average)', '61% beautiful (Your Average)', '60% beautiful (Your Average)', '62% beautiful (Your Average)', '60% beautiful (Your Average)', '63% beautiful (Your Average)', '60% beautiful (Your Average)', '64% beautiful (Your Average)', '60% beautiful (Your Average)', '65% beautiful (Your Average)', '60% beautiful (Your Average)', '66% beautiful (Your Average)', '60% beautiful (Your Average)', '67% beautiful (Your Average)', '60% beautiful (Your Average)', '68% beautiful (Your Average)', '60% beautiful (Your Average)', '69% beautiful (Noice)', '60% beautiful (Your Average)', '70% beautiful (Your pretty beautiful)', '60% beautiful (Your Average)', '71% beautiful (Your pretty beautiful)', '72% beautiful (Your pretty beautiful)', '73% beautiful (Your pretty beautiful)', '74% beautiful (Your pretty beautiful)', '75% beautiful (Your pretty beautiful)', '76% beautiful (Your beautiful)', '77% beautiful (Your beautiful)', '78% beautiful (Your beautiful)', '79% beautiful (Your beautiful)', '80% beautiful (Your REALLY beautiful)', '81% beautiful (Your REALLY beautiful)', '82% beautiful (Your REALLY beautiful)', '83% beautiful (Your REALLY beautiful)', '84% beautiful (Your REALLY beautiful)', '85% beautiful (Your REALLY beautiful)', '86% beautiful (Your REALLY beautiful)', '87% beautiful (Your REALLY beautiful)', '88% beautiful (Your REALLY beautiful)', '89% beautiful (Your REALLY beautiful)', '90% beautiful (Your REALLY beautiful)', '91% beautiful (Your REALLY beautiful)', '92% beautiful (Your REALLY beautiful)', '93% beautiful (Your REALLY beautiful)', '94% beautiful (Your REALLY beautiful)', '95% beautiful (Your REALLY beautiful)', '96% beautiful (Your REALLY beautiful)', '97% beautiful (Your REALLY beautiful)', '98% beautiful (Your REALLY beautiful)', '99% beautiful (Your REALLY beautiful)', '100% beautiful (Your REALLY beautiful)', '∞% beautiful (You are the chosen one)'];

const gay = percents[Math.floor(Math.random() * percents.length)];

        let mention = message.mentions.users.first();

        const gayEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Beauty r8 machine')
            .setDescription(`${mention} is ${gay}`)
            .setFooter("Please don't take this seriously, you are beautiful just the way you are :)")
        const noMentionEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Beauty r8 machine')

            .setDescription(`${message.author} is ${gay}`)
             .setFooter("Please don't take this seriously, you are beautiful just the way you are :)")

        if (!mention) return message.reply(noMentionEmbed)

        message.channel.send(gayEmbed)
    
	
            

 
	},
};