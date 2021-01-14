const db = require("quick.db")

module.exports = {
  name: "newprefix",
  usage: "!newprefix set <new-prefix>",
  description: "Change the guild prefix",
  aliases: ['np', 'newp'],
  async execute( message, args, bot) {
    //PERMISSION
    if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix: Manage Server")
    }
    
    if(!args[1]) {
      return message.channel.send("Usage: !newprefix set <new-prefix>")
    } 
   
    
    if(args.slice(2).join(' ').length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }

    if(args[1].toLowerCase() !== 'set') return message.channel.send("Usage: !newprefix set <new-prefix>")
    
    if(args[2] === "!") {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
    
    db.set(`prefix_${message.guild.id}`, args[2])
  await message.channel.send(`Succesfully set the Bot Prefix to **"${args[2]}"**\n\n**__WARNING__** once you changed the prefix, some commands will still show as "!"`)
    
  }
}