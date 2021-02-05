 const Discord = require('discord.js')
const bot = new Discord.Client();
const ms = require("ms");
const ss = require("parse-ms")
const moment = require("moment")
const weather = require('weather-js')
const { parse } = require("twemoji-parser");
var rn = require('random-number');
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

const { GiveawaysManager } = require("discord-giveaways");

if (!db.get('giveaways')) db.set('giveaways', []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
    // This function is called when the manager needs to get all the giveaway stored in the database.
    async getAllGiveaways() {
        // Get all the giveaway in the database
        return db.get('giveaways');
    }

    // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
    async saveGiveaway(messageID, giveawayData) {
        // Add the new one
        db.push('giveaways', giveawayData);
        // Don't forget to return something!
        return true;
    }

    async editGiveaway(messageID, giveawayData) {
        // Gets all the current giveaways
        const giveaways = db.get('giveaways');
        // Remove the old giveaway from the current giveaways ID
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Push the new giveaway to the array
        newGiveawaysArray.push(giveawayData);
        // Save the updated array
        db.set('giveaways', newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

    // This function is called when a giveaway needs to be deleted from the database.
    async deleteGiveaway(messageID) {
        // Remove the giveaway from the array
        const newGiveawaysArray = db.get('giveaways').filter((giveaway) => giveaway.messageID !== messageID);
        // Save the updated array
        db.set('giveaways', newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }
};

const manager = new GiveawayManagerWithOwnDatabase(bot, {
    storage: false,
    updateCountdownEvery: 5000,
      hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        embedColor: "#ffaa3b",
        reaction: "🎉"
    }
})

bot.giveawaysManager = manager;


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

bot.on("ready", () => {
  let activities = [
     
      `!help | !invite | !vote on ${bot.guilds.cache.size} servers`
  ],i = 0;
  setInterval( () => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 190000); //

      bot.user.setPresence({
        game: {
            name:`!help | !invite | vote on ${bot.guilds.cache.size} servers`,
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
              const embedd = new Discord.MessageEmbed()
            .setTitle('Someone just put me in their server!')
            .addField('Server Name', `${guild.name}`)
            .addField('Server ID', `${guild.id}`)
            .addField('Member Count', `${guild.members.cache.size}`, true)
           .setFooter(`Now I have ${bot.guilds.cache.size} servers`) 
           
           const embed = new Discord.MessageEmbed()
            .setTitle('Someone just put me in their server!')
            .addField('Server Name', `${guild.name}`)
            .addField('Server ID', `${guild.id}`)
            .setFooter(`Now I have ${bot.guilds.cache.size} servers`)
            
            reportsChannel.send(embedd).catch((err) => {
              reportsChannel.send(embed)
            })


});
bot.on('guildDelete', guild => {

let guildMain = bot.guilds.cache.get("719904792922816596")
            let reportsChannel = guildMain.channels.cache.find(x => x.id === "792346948837310505")
              const embedd = new Discord.MessageEmbed()
            .setTitle('Someone removed me in their server :(')
            .addField('Server Name', `${guild.name}`)
            .addField('Server ID', `${guild.id}`)
            .setFooter(`Now I have ${bot.guilds.cache.size} servers`)
            const embed = new Discord.MessageEmbed()
            .setTitle('Someone removed me in their server :(')
            .addField('Server Name', `${guild.name}`)
            .addField('Server ID', `${guild.id}`)
            .addField('Member Count', `${guild.members.cache.size}`, true)
            .setFooter(`Now I have ${bot.guilds.cache.size} servers`)
            reportsChannel.send(embed).catch((err) => {
              reportsChannel.send(embedd)
            })


});

const cooldowns = new Discord.Collection();
    this.aliases = new Discord.Collection()
    this.description = new Discord.Collection();
    this.usage = new Discord.Collection()

bot.on('message',async  message => {
  if(message.channel.type === "dm") return
 let prefix = await db.get(`prefix_${message.guild.id}`) || "!"

 if(prefix === null) prefix = PREFIX;
   if(!message.guild) return;

  	if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return
	const args = message.content.substring(prefix.length).split(" ");
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
   let prefix = await db.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = PREFIX;
new TicTacToe({
    language: 'en',
    command: `${prefix}ttt`
}, bot);

}) 




bot.on('message', async message => {
if(message.channel.type === "dm") return
       let prefix = await db.get(`prefix_${message.guild.id}`) || "!"
  if(prefix === null) prefix = PREFIX;
      if (message.content == bot.user.toString()) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Prefix")
            .setDescription(`My Prefix is "${prefix}"`)
            .setFooter(`Type ${prefix}help for more information`)
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
        let channel = db.fetch(`chatbot_${message.guild.id}`);
     if(!channel) return;
        var sChannel = message.guild.channels.cache.get(channel);
      if(!sChannel.viewable) return
     if (message.author.bot || sChannel.id !== message.channel.id) return;
     message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
     if (message.content.includes(`@`)) {
        return sChannel.send(`**:x: Please dont mention anyone**`);
     }
      let content = message.content;

if(message.content && !message.author.bot){
        sChannel.startTyping();
    if (!message.content) return sChannel.send("Please say something.");
   
         fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${content}&botname=Wide&ownername=WideIrenaKan1#5105&user=1`) //your chatbot api goes here
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

  
         
              
    });

bot.on("message", message => {
  if(message.content === "!owner"){
    message.channel.send('My owner is **WideIrenaKan1#5105**')
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

manager.on('giveawayEnded', async (giveaway, winners) => {
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


var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())

bot.login(process.env.token).catch((err) => {
  console.log(err)
})