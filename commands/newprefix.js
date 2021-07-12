const { Database } = require("quick.replit");
const gdb = new Database(process.env.REPLIT_DB_URL)
module.exports = {
  name: "newprefix",
  usage: "newprefix set <new-prefix>",
  description: "Change the guild prefix",
  aliases: ['np', 'newp'],
  cooldown: 10,
  async execute( message, args, bot) {
    //PERMISSION
    if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix: Manage Server")
    }
    
    if(!args[1]) {
      return message.channel.send("Usage: newprefix set <new-prefix>")
    } 
   
    
    if(args.slice(2).join(' ').length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }

    if(args[1].toLowerCase() !== 'set') return message.channel.send("Usage: !newprefix set <new-prefix>")
    
    
    gdb.set(`prefix_${message.guild.id}`, args[2])
  await message.channel.send(`Succesfully set the Bot Prefix to **"${args[2]}"**\n\n**__WARNING__** once you changed the prefix, some commands will still show as "!"`)
    
  }
}