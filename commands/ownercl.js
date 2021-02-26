const Discord = require('discord.js')
module.exports = {
    name: 'ownercl',
    description:'hey' ,
    aliases: ['ownerclear'],
    usage: 'hey',
    cooldown: 1,
    async execute(message, args, bot) {
         let developers = ['719507348137181254'];
  if(!developers.includes(message.author.id)) return message.channel.send("ur not the owner");
      let args2 = message.content.split(" ").slice(1).join(' ')
     if(message.author.id === "719507348137181254"){
     if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the right permission: Manage Messages ')
            const amount = args[1]

            if (!amount) return message.reply('please provide an amount of messages for me to delete')
            if (isNaN(amount)) return message.channel.send('It needs to be a number')

            if (amount > 100) return message.reply(`You cannot clear more than 100 messages at once`)

            if (amount < 1) return message.reply(`You need to delete at least one message`)
            message.delete().then(() => {

            
            message.channel.bulkDelete(amount)
            }).then(() => {

                message.channel.send('Success!').then(m => m.delete({ timeout: 2000 }));

            }).catch((err) => {
                return message.channel.send(`Oh no, an error occurred: \`${err.message}\`.`)
            })

     } else return
    },
}