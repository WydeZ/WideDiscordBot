const Discord = require('discord.js')
module.exports = {
    name: 'eval',
    description:'Evalute a code' ,
    aliases: ['ev'],
    usage: '-eval <code>',
    cooldown: 1,
    async execute(message, args, bot) {
         let developers = ['719507348137181254'];
  if(!developers.includes(message.author.id)) return message.channel.send("ur not the owner");
      let args2 = message.content.split(" ").slice(1).join(' ')
     if(message.author.id === "719507348137181254"){
      if(args2.includes(`process.env.token`)) return message.channel.send('go ask bot owner for the token you cant grab it from me')
        // Put your userID here
 const clean = text => {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  };

  if (!args[1]) return message.channel.send(`❌ | Please provide code to eval.`);
  try {
    const code = args2
    let evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    const embed = new Discord.MessageEmbed()
      .setAuthor("EVALUATION", message.author.displayAvatarURL({ dynamic: true }))
      .setColor("GREEN")
      .addField(`📥INPUT📥`, `\`\`\`js\n${code}\`\`\``)
      .addField(`📤OUTPUT📤`, `\`\`\`js\n${clean(evaled)}\`\`\``)
      .setFooter("OUTCOME: SUCCESS!", bot.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
      .setAuthor("EVALUATION", message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#F80000")
      .addField(`📥INPUT📥`, `\`\`\`js\n${args2}\`\`\``)
      .addField(`📤OUTPUT📤`, `\`\`\`js\n${clean(err)}\`\`\``)
      .setFooter("OUTCOME: ERROR!", bot.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
  }
     } else return
    }
}