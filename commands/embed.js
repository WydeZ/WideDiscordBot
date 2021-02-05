
const Discord = require('discord.js')
module.exports = {
	name: 'embed',
	description: 'Makes an embed' ,
	aliases: ['embedmaker'],
	usage: '!embed',
	cooldown: 1,
		async execute(message, args, bot) {
       if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command: Manage Messages')
 const filter = m => m.author.id === message.author.id;

    let Channel;
    let Title;
    let Message;
    let Hex;
    let Footer;

    message.channel.send('**Please type below what channel you want this embed to be in by ID** Type: "none" if you want the embed to be in here | Type "cancel" to cancel anytime');
    let collector = new Discord.MessageCollector(message.channel, filter, { max: 1 });
    collector.on('collect', async(message, col) => {
        Channel = message.content;
         if(Channel.toLowerCase() ==='none') Channel = message.channel.id
         if(Channel.toLowerCase() === 'cancel') return message.channel.send('**Command Cancelled ✅**')
       if (!Channel)Channel = message.channel.id
            let hello =  message.guild.channels.cache.get(Channel)
     if(!hello) return message.channel.send('You have provided an invalid channel ID')


    message.channel.send('**Please Type below the title of the embed** | Type: "none" if you do not want a title | Type "cancel" to cancel anytime')
    let collector1 = new Discord.MessageCollector(message.channel, filter, { max : 1});
    collector1.on('collect', async(message, col) => {
        Title = message.content;
        if(Title.toLowerCase() ==='none') Title = " "
        if(!Title) Title = " "
         if(message.content.toLowerCase() === 'cancel') return message.channel.send('**Command Cancelled ✅**')
        if(Title.length > 256) return message.channel.send("The title can't be more than 256 characters")

    message.channel.send('**Please type below the Message / Description** | Type: "none" if you do not want a description | Type "cancel" to cancel anytime');
    let collector2 = new Discord.MessageCollector(message.channel, filter, { max : 1 });
    collector2.on('collect', async(message, col) => {
        Message = message.content;
             if(Message.toLowerCase() ==='none') Message = " "
        if (!Message) Message = " ";
         if(message.content.toLowerCase() === 'cancel') return message.channel.send('**Command Cancelled ✅**')
        if(Message.length > 2048) return message.channel.send("The description can't be more than 2048 characters")

    message.channel.send('**Please type below the Correct Hex Color** | Type "random" if you want the embed to have a random color | Type "cancel" to cancel anytime');
    let collector3 = new Discord.MessageCollector(message.channel, filter, { max : 1 });
    collector3.on('collect', async(message, col) => {
        Hex = message.content;
        if (!Hex) Hex = "RANDOM";
        if(Hex.toLowerCase === 'random') Hex = "RANDOM"
         if(message.content.toLowerCase() === 'cancel') return message.channel.send('**Command Cancelled ✅**')

    message.channel.send('**Please type below the Footer** | Type "none" if you do not want to have a footer | Type "cancel" to cancel anytime');
    let collector4 = new Discord.MessageCollector(message.channel, filter, { max : 1});
    collector4.on('collect', async(message, col) => {
        Footer = message.content;
        if(Footer.toLowerCase() === 'none') Footer = " ";
        if(!Footer) Footer = " ";
         if(message.content.toLowerCase() === 'cancel') return message.channel.send('**Command Cancelled ✅**')
        if(Footer.length > 2048) return message.channel.send("The footer can't be more than 2048 characters")

        let embed = new Discord.MessageEmbed()
        .setTitle(Title)
        .setDescription(Message)
        .setColor(Hex)
        .setFooter(Footer)
    
     
     let hello =  message.guild.channels.cache.get(Channel)
     if(!hello) return message.channel.send('You have provided an invalid channel ID')
        hello.send(embed).then(() => {
          message.channel.send(`I have succesfully made the embed in ${hello}`)
        }).catch((err) => {
          return message.channel.send('I was not able to make the embed. Try the following:\nMake sure I have the right permission in that channel\nMake sure you did mention a channel by ID\n\nIf it still does not work report it using the !bug command or join the support server (!links)')
        })
   })
    })
     })
      })
       });          
	},
};