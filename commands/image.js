const Discord = require('discord.js')
const cheerio = require('cheerio')
const request = require('request')
module.exports = {
	name: 'image',
	description: 'Shows an image of your choice',
	aliases: ['picture', 'img'],
	usage: 'image <word>',
	cooldown: 1,
	async execute(message, args, bot) {
	  if(!args[1]) return message.channel.send('Please provide to me something to search | Usage: image <word>')
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + `${args[1]}`,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }

    };

 let oop = args.slice(1).join(" ")
                let baby = ['nude', 'boob', 'sex', 'porn', 'dick', 'penis']
                for (var i = 0; i < baby.length; i++) {
                    if (oop.includes(baby[i])) {
                        return message.channel.send('**Please search for something else** :x:')
                    }
                }


    request(options, function (error, _response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((_v, i) => links.eq(i).attr("href"));

        if (!urls.length) {

            return;
        }

        // Send result
        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });

    },
}