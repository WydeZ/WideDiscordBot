 const Discord = require('discord.js')
const bot = new Discord.Client();
const ms = require("ms");
const ss = require("parse-ms")
const moment = require("moment")
const apis = require('blueapi.js');
const weather = require('weather-js')
const { parse } = require("twemoji-parser");
const petPetGif = require('pet-pet-gif')
var rn = require('random-number');
const luhv = require('luhv');
const fetch = require('node-fetch');
const randomPuppy = require('random-puppy');
const math = require('mathjs');
require('events').EventEmitter.defaultMaxListeners = 0;
const querystring = require('querystring')
const ezgames = require('ez-games.js')
const queue = new Map();
const ranimg = require('ranimg');

var randomWords = require('random-words');
const yts = require("yt-search");
const path = require('path');
const google = require('google')
const { hangman } = require('reconlx')
const Canvacord = require("canvacord")
const api = require('random-stuff-api')
const fs = require("fs");
const chatcord = require('chatcord')
const emoji = require('discord-emoji-convert');
const db = require("quick.db");
const hastebin = require("hastebin-gen");
const random = require('random')
const translate = require('@k3rn31p4nic/google-translate-api');
const { TextChannel } = require("discord.js")
const Jumble = require("jumble-words");
const MadnessTikTok = require("tiktok-scraper");
const { Spawn } = require("pokecord");
const Got = require("got");
const shorten = require("isgd");
const { stripIndents } = require("common-tags");
const figlet = require('figlet');
const GameCord = require('gamecord');
const darkrandom = require("random");
const darkemail = require("random-email");
const darkpassword = require("generate-password");
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk")
const token = " ";
const TicTacToe = require('discord-tictactoe');
const PREFIX = '!';
const ownerid = "719507348137181254"

const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Invite Wide Discord Bot: https://discord.com/oauth2/authorize?client_id=729537680257450104&scope=bot&permissions=8'))
app.listen(port, () => 
console.log('Server is online!'))

const cheerio = require('cheerio');
const request = require('request')
const repldata = require('@replit/database')
const tb = new repldata()
 const { Database } = require("quick.replit");
const gdb = new Database(process.env.REPLIT_DB_URL)
const { GiveawaysManager } = require('discord-giveaways');
const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
    // This function is called when the manager needs to get all giveaways which are stored in the database.
    async getAllGiveaways() {
        // Get all giveaways from the database
        return await gdb.get('giveaways');
    }

    // This function is called when a giveaway needs to be saved in the database.
    async saveGiveaway(messageID, giveawayData) {
        // Add the new giveaway to the database
        await gdb.push('giveaways', giveawayData);
        // Don't forget to return something!
        return true;
    }

    // This function is called when a giveaway needs to be edited in the database.
    async editGiveaway(messageID, giveawayData) {
        // Get all giveaways from the database
        const giveaways = await gdb.get('giveaways');
        // Remove the unedited giveaway from the array
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Push the edited giveaway into the array
        newGiveawaysArray.push(giveawayData);
        // Save the updated array
        await gdb.set('giveaways', newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

    // This function is called when a giveaway needs to be deleted from the database.
    async deleteGiveaway(messageID) {
        // Get all giveaways from the database
        const giveaways = await gdb.get('giveaways');
        // Remove the giveaway from the array
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Save the updated array
        await gdb.set('giveaways', newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }
}

const manager = new GiveawayManagerWithOwnDatabase(bot, {
    updateCountdownEvery: 10000,
      hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        embedColor: "#ffaa3b",
        reaction: "🎉"
    }
}, false); // ATTENTION: Add "false" in order to not start the manager until the DB got checked, see below

bot.giveawaysManager = manager;

gdb.on('ready', async () => {
    if (!Array.isArray(await gdb.get('giveaways'))) await gdb.set('giveaways', [])

    // Start the manager only after the DB got checked to prevent an error
  bot.giveawaysManager._init();
});
manager.on('giveawayReactionAdded', async (giveaway, member, reaction) => {
  if(!giveaway.extraData) return
 if(giveaway.extraData === null) return
if (
      giveaway.extraData.role !== null &&
      !member.roles.cache.get(giveaway.extraData.role.id)
    ) {
      reaction.users.remove(member.user);
      member.send({
        embed: {
          title: ":x: Entry Denied!",
          description: `You must have the role \`${giveaway.extraData.role.name}\` to participate in that giveaway.`,
          color: 'RED',
        }
      });
    }
  })

manager.on('giveawayEnded', async (giveaway, winners, reaction) => {
  const hostID = giveaway.hostedBy.slice(2, -1);
  const host = await bot.users.fetch(hostID)

  if (host) {
    const hostembed = new Discord.MessageEmbed()
    .setTitle(`Your Giveaway has Ended`)
    .setColor('GREEN')
    .setDescription(`Your Giveaway for [${giveaway.prize}](${giveaway.messageURL}) has ended`)
    host.send(hostembed).catch((err) => {
      return
    })
  }

     winners.forEach((member) => {
        const embed = new Discord.MessageEmbed()
  .setTitle('Congratulations!')
  .setDescription(`Congrats ${member.user.username}! You won [${giveaway.prize}](${giveaway.messageURL})`)
  .setColor('GREEN')
         member.send(embed).catch((err) => {
      return
    })
     });
 
});

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
 for(const file of eventFiles) {
 const event = require(`./events/${file}`);

 if(!event.execute) {
   throw new Error("Execute function is required!")
 }

 bot.on(event.name, event.execute.bind(null, bot))
 
 }

bot.on("ready", async () => {
  let activities = [
     
      `!help | !invite | !vote on ${bot.guilds.cache.size} servers`
  ],i = 0;
  setInterval( () => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 190000); //

      bot.user.setPresence({
        game: {
            name:`!help | !invite | vote on ${bot.guilds.cache.size} servers | Owner: WideIrenaKan1#3119`,
            type: "WATCHING",
            url: "https://discordapp.com/"
        }
    });
     //WATCHING,LISTENING,PLAYING,STREAMING
    bot.user
        .setStatus("a")
        .catch(console.error);
    console.log("This bot is online");
});

bot.on('guildCreate', guild => {
let guildMain = bot.guilds.cache.get("719904792922816596")
            let reportsChannel = guildMain.channels.cache.find(x => x.id === "792346948837310505")
            const hey = bot.users.fetch(guild.ownerID).then(hey => {
              const embedd = new Discord.MessageEmbed()
            .setTitle('Someone just put me in their server!')
            .addField('Server Name', `${guild.name}`)
            .addField('Server ID', `${guild.id}`)
            .addField('Owner', `${hey.username}#${hey.discriminator}`)
           .setFooter(`Now I have ${bot.guilds.cache.size} servers`) 
           .setColor('GREEN')
            reportsChannel.send(embedd).catch((err) => {
              reportsChannel.send(err)
            })
            })
});


bot.on("guildDelete", guild => {
let guildMain = bot.guilds.cache.get("719904792922816596")
            let reportsChannel = guildMain.channels.cache.find(x => x.id === "792346948837310505")
            const hey = bot.users.fetch(guild.ownerID).then(hey => {
              const embedd = new Discord.MessageEmbed()
            .setTitle('Someone just removed me from their server :(')
            .addField('Server Name', `${guild.name}`)
            .addField('Server ID', `${guild.id}`)
             .addField('Owner', `${hey.username}#${hey.discriminator}`)
           .setFooter(`Now I have ${bot.guilds.cache.size} servers`) 
           .setColor('RED')
            reportsChannel.send(embedd).catch((err) => {
              reportsChannel.send(err)
            })
            })
});
const cooldowns = new Discord.Collection();
    this.aliases = new Discord.Collection()
    this.description = new Discord.Collection();
    this.usage = new Discord.Collection()

bot.on('message',async  message => {
  if(message.channel.type === "dm") return
 let prefix = await gdb.get(`prefix_${message.guild.id}`) || "!"

 if(prefix === null) prefix = PREFIX;

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${bot.user.id}> |${escapeRegex(prefix)}|<@!?${bot.user.id}>)\\s*`);

    if(!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
   if(!message.guild) return;

  	if (message.author.bot || message.channel.type === "dm") return
	const args = message.content.substring(matchedPrefix.length).split(/ +/);
	const commandName = args[0].toLowerCase();

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

    
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
   let blacklisted = db.get(`blacklist_${message.author.id}`)
   if(blacklisted === 'blacklist') return

    if (message.content.length > 2048) return;
	try {
    
		command.execute(message, args, bot);
	} catch (error) {
		console.log(error)
    const errembed = new Discord.MessageEmbed()
    .setTitle("There was an error tryng to execute the command!")
    .setDescription('Oops! Looks like that command errored. The error has been forwarded to the owner and will be fixed soon. Please refrain from repeatedly invoking this command in the meanwhile. If you know what caused the problem, please stop doing it\n\nYou can join the [Support Server](https://discord.gg/eqjuTv8)')
    .addField('Error', `\`${error.message}\``)
		.setFooter('Spamming errored commands will result in a blacklist.')
    .setColor('RED')
    message.channel.send(errembed)
	}

});


bot.on('message', async message => {
  if(message.channel.type === "dm") return
   let args = message.content.substring(PREFIX.length).split(" ");
 if(message.content.startsWith('!blacklist')){
       let developers = ['719507348137181254'];
  if(!developers.includes(message.author.id)) return 
     if(message.author.id === "719507348137181254"){
        bot.users.fetch(args[1]).then(user => {
    let blacklisted =db.get(`blacklist_${user.id}`)
    
    if(blacklisted === "blacklist") return message.channel.send(`That user is already blacklisted!`)
        })
    
        
    let reason = args.slice(2).join(' ')
    if(!reason) reason = "N/A"
    bot.users.fetch(args[1]).then(user => {
      const embed = new Discord.MessageEmbed()
      .setTitle('You have been blacklisted!')
      .setDescription(`You have been blacklisted for: ${reason}. If you think it is a mistake [Join the Support Server](https://discord.gg/eqjuTv8) and [Fill the appeal form](https://forms.gle/QqzJLLDUWYzKuHWm7). Please keep your DMs open and you must be in the Support Server. If you are banned in the support server, please contact: WideIrenaKan1#3116 (ID: 719507348137181254 just in case I changed tag)`)
      .setColor('RED')
      message.channel.send(`Succesfully blacklisted the user!`)
      user.send(embed).catch((err) => {
        return message.channel.send(`${err.message}`)
      })
          db.set(`blacklist_${user.id}`, "blacklist")
    })
     } else return

 }
}) 
;
bot.on('message', async message => {
  if(message.channel.type === "dm") return
   let args = message.content.substring(PREFIX.length).split(" ");
 if(message.content.startsWith('!dogpfp')){
   const embed  = new Discord.MessageEmbed()
   .setTitle('Dog PFP')
   .setImage('https://i.pinimg.com/originals/fe/9b/fc/fe9bfc854d5beb97e8591fc3e066b896.gif')
   .setDescription('dog pfp')
   .setColor('ORANGE')
   .setFooter('dog pfp')
   message.channel.send(embed)
    
     } 
     

 
}) 

bot.on('message', async message => {
  if(message.channel.type === "dm") return
     let args = message.content.substring(PREFIX.length).split(" ");
 if(message.content.startsWith('!whitelist')){
       let developers = ['719507348137181254'];
  if(!developers.includes(message.author.id)) return 
     if(message.author.id === "719507348137181254"){
          let user;
       if(!isNaN(args[1])) { 
         let userr = bot.users.fetch(args[1])
      user= bot.users.cache.get(userr.id)
       }
   else user = message.mentions.users.first() 
    if(!user) return message.channel.send("Please specify a user")
    let blacklisted = db.get(`blacklist_${user.id}`)
    
    if(blacklisted === null || blacklisted != "blacklist") return message.channel.send(`That user is not blacklisted`)
    
     bot.users.fetch(args[1]).then(user => {
     user.send('You have been whitelisted from the bot!').catch((err) => {
        return
    })
    })
    message.channel.send(`Succesfully whitelisted the user!`).then(() => {
      user.send('You have been whitelisted from the bot!').catch((err) => {
        return
    })
        db.delete(`blacklist_${user.id}`)
    })

     } else return

 }
})


bot.on('message', async message => {
if(message.channel.type === "dm") return
       let prefix = await db.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = PREFIX;
      if (message.content == bot.user.toString()) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Prefix")
            .setDescription(`My Prefix is "${prefix}"`)
            .setFooter(`Type ${prefix}help for more information | "${prefix}newprefix set <prefix>" to change prefix`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor('RANDOM')
        message.channel.send(embed)
    }

})


var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var games = [];


var stages = [`\`\`\`

/---|
|   o
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   o ~ Game Over, You Lost
|  /|\\
|  / \\
|
\`\`\`
`];

function generateMessage(phrase, guesses) {
    var s = "";
    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] == ' ')
            s += " ";
        else {
            var c = phrase[i];
            if (guesses.indexOf(c) == -1)
                c = "\\_";
            s += "__" + c + "__ ";
        }
    }
    return s;
}

function nextLetter(message, index, word) {
    message.react(letters[index]).then(r => {
        index++;
        if (index < letters.length) {
            if (index == 13) {
                message.channel.send(generateMessage(word, [])).then(m => {
                    games.push({
                        stage: 0,
                        msg0: message,
                        msg1: m,
                        phrase: word,
                        guesses: []
                    });
                    nextLetter(m, index);
                });
            } else {
                nextLetter(message, index, word);
            }
        }
    });
}



bot.on('message', async message => {
  if(message.channel.type === "dm") return
  if(message.author.bot) return
  let afk = new db.table("AFKs"),
	 authorStatus = await afk.get(`${message.author.id}_${message.guild.id}`)
	 let mentioned = message.mentions.members.first()

	 if(mentioned){
		    const status = await afk.fetch(`${mentioned.id}_${message.guild.id}`);
		 if(status){
			 message.channel.send(`**${mentioned.user.tag}** is curently AFK! Reason: ${status}`)
	
		 }
	 }
	 		 if(authorStatus){
		  message.reply("You have been removed from the AFK list!").then(m => m.delete({ timeout: 2000 }));
			 afk.delete(`${message.author.id}_${message.guild.id}`)
      message.member.setNickname(`${message.author.username}`).catch((err) => {
            return
        })
		 }

})

bot.on("message", async message => {
if(message.channel.type === "dm") return
        let channel = await gdb.get(`chatbot_${message.guild.id}`);
     if(!channel) return
        var sChannel = message.guild.channels.cache.get(channel);
        if(!sChannel) return
     if (message.author.bot) return;
     if(sChannel.id !== message.channel.id) return
     message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
     if (message.content.includes(`@`)) {
        return sChannel.send(`**:x: Please dont mention anyone**`)

     }
      let content = message.content;
if(message.content && !message.author.bot){
        sChannel.startTyping();
    if (!message.content) return sChannel.send("Please say something.");
   
         fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${content}&botname=Wide&ownername=WideIrenaKan1#3119`) //your chatbot api goes here
        .then(res => res.json())
        .then(data => {
            sChannel.send(`> ${message.content} \n **${message.author.tag}**, ${data.message}`);
        }).catch((err) => {
          return
        }).then(() => {
           sChannel.stopTyping();
        })
        sChannel.stopTyping();
}
})       
   

bot.on("message", message => {
  if(message.content === "!owner"){
    message.channel.send('My owner is **WideIrenaKan1#3119**')
  }
})

bot.on("message", message => {
      let args = message.content.substring(PREFIX.length).split(" ");
  if(message.content.startsWith("!guildleave")){
     let developers = ['719507348137181254'];

  if(!developers.includes(message.author.id)) return
  if(message.author.id !== "719507348137181254" ) return

  if(message.author.id === "719507348137181254"){
    if(!args[1]) return message.channel.send('Give me guild id')
    let id = args[1]
   bot.guilds.cache.get(id).leave().then(() => {
      message.channel.send(`Succesfully left the guild`).catch((err) => {
        return message.channel.send('Something went wrong')
      })
    })
  }

  }
})
bot.on("message", async message => {
    if(message.guild) return;
if(message.author.id === bot.user.id) return;
if(message.author.id === '719507348137181254') return;
let guildMain = bot.guilds.cache.get("719904792922816596")
 let reportsChannel = guildMain.channels.cache.find(x => x.id === "813219764343668790")
let embed = new Discord.MessageEmbed()
.setTitle("Someone just DMed me!")
.addField("Message by ", message.author.tag)
.addField("ID ", message.author.id)
.addField("Message ", message.content)
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setTimestamp()
.setColor("ORANGE")

reportsChannel.send(embed).catch((err) => {
  let embeds = new Discord.MessageEmbed()
.setTitle("Someone just DMed me!")
.addField("Message ", `Could not get the message! (User probably pinned or someth) | Error: ${err}`)
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setTimestamp()
.setColor("ORANGE")
  reportsChannel.send(embeds)
})
})



bot.on("message", async message => {
   let args = message.content.substring(PREFIX.length).split(" ");
   let user;
    let developers = ['719507348137181254'];
  if(!developers.includes(message.author.id)) return 
if(message.content.startsWith('!wreply')){
     
let messaged = args.slice(2).join(' ')
if(!messaged) return message.channel.send("Please specify a message!")

bot.users.fetch(args[1]).then(person => {
    person.send(messaged).then(() => {
      message.channel.send('Sent!')
    }).catch((err) => {
      message.channel.send('Cant dm the user')
    })
})
.catch((err) => {
return message.channel.send(err.message)
})
}
})

var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())

process.on('unhandledRejection', (reason, p) => {
  console.log('===== UNHANDLED REJECTION =====');
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  console.log('===== UNHANDLED REJECTION =====');
  // application specific logging, throwing an error, or other logic here
});

bot.login(process.env.token).catch((err) => {
return
})


