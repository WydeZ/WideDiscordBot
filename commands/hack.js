
const Discord = require('discord.js')
const darkrandom = require("random");
const darkemail = require("random-email");
const darkpassword = require("generate-password");

module.exports = {
	name: 'hack',
	description:'Hacks the mentioned user (totally real)' ,
	aliases: ['hacking'],
	usage: 'hack <user>',
	cooldown: 1,
		async execute(message, args, bot) {
     const user = message.mentions.users.first();
            if (!user) {
                return message.channel.send(`Please mention who are you hacking | Usage: !hack <user>`)
            }
            const impostorpassword = darkpassword.generate({
                length: 10,
                numbers: true
            });
            const member = message.guild.member(user);
            const mostCommon = ["reow", "what", "e", "meh", "kill"]
            const lastdm = ["Are you sure were gonna go this?", "ahaha got it", "bye", "whoops wrong person", "please tell me you didn't do it"]
            message.channel.send(`Hacking ${member.user.username} now...`)
                .then(async (msg) => {
                    setTimeout(async function () {
                        await msg.edit(`[▘] Finding discord login... (2fa bypassed)`)
                    }, 1000);
                    setTimeout(async function () {
                        await msg.edit(`[▝] Email: \`${darkemail({ domain: 'haxor.com' })}\`\nPassword: \`${impostorpassword}\``)
                    }, 3000);
                    setTimeout(async function () {
                        await msg.edit(`[▗] Fetching dms with closest friends (if there are any friends at all)`)
                    }, 5000);
                    setTimeout(async function () {
                        await msg.edit(`[▖] Last DM: "${lastdm[Math.floor(Math.random() * lastdm.length)]}"`)
                    }, 7000);
                    setTimeout(async function () {
                        await msg.edit(`[▘] Finding most common word...`)
                    }, 9000);
                    setTimeout(async function () {
                        await msg.edit(`[▝] const mostCommon = "${mostCommon[Math.floor(Math.random() * mostCommon.length)]}"`)
                    }, 11000);
                    setTimeout(async function () {
                        await msg.edit(`[▗] Injecting trojan virus into discriminator #${member.user.discriminator}`)
                    }, 13000);
                    setTimeout(async function () {
                        await msg.edit(`[▖] Virus injected, emotes stolen `)
                    }, 15000);
                    setTimeout(async function () {
                        await msg.edit(`[▘] Looking in files `)
                    }, 17000);
                    setTimeout(async function () {
                        await msg.edit(`[▝] Getting personal information`)
                    }, 19000);
                    setTimeout(async function () {
                        await msg.edit(`[▗] Findind IP address...`)
                    }, 21000);
                    setTimeout(async function () {
                        await msg.edit(`[▖] IP address: \`127.0.0.1:${darkrandom.int(100, 9999)}\``)
                    }, 23000);
                    setTimeout(async function () {
                        await msg.edit(`[▘] Selling data to the Government...`)
                    }, 25000);
                    setTimeout(async function () {
                        await msg.edit(`[▝] Reporting account to discord for breaking ToS...`)
                    }, 27000);
                    setTimeout(async function () {
                        await msg.edit(`[▗] Hacking medical records`)
                    }, 29000);
                    setTimeout(async function () {
                        await msg.edit(`Finished hacking ${member.user.username}`)
                    }, 32000);
                    setTimeout(async function () {
                        await message.channel.send(`The *totally* real and dangerous hack is complete`)
                    }, 34000);
                })
   
   
              
	},
};