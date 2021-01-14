const Discord = require("discord.js");

module.exports = {
  name: "members",
  aliases: ["mbs"],
  description: "Show Discord Server Members!",
  usage: "!members",
  async execute(message, args, bot)  {
if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
    const Online = message.guild.members.cache.filter(Mem => Mem.presence.status === "online"), Offline = await message.guild.members.cache.filter(Mem => Mem.presence.status === "offline"), Idle = await message.guild.members.cache.filter(Mem => Mem.presence.status === "idle"), Dnd = await message.guild.members.cache.filter(Mem => Mem.presence.status === "dnd");
    const Bots = await message.guild.members.cache.filter(Mem => Mem.user.bot), Humans = await message.guild.members.cache.filter(Mem => !Mem.user.bot), Players = await message.guild.members.cache.filter(Mem => Mem.presence.activities && Mem.presence.activities[0] && Mem.presence.activities[0].type === "PLAYING"), Websites = await message.guild.members.cache.filter(Mem => Mem.presence.clientStatus && Object.keys(Mem.presence.clientStatus).includes("web")), Desktop = await message.guild.members.cache.filter(Mem => Mem.presence.clientStatus && Object.keys(Mem.presence.clientStatus).includes("desktop")), Mobile = await message.guild.members.cache.filter(Mem => Mem.presence.clientStatus && Object.keys(Mem.presence.clientStatus).includes("mobile"));
    let SameTag = await message.guild.members.cache.map(Mem => Mem.user.discriminator), Fake = [], Original = [];

    for (let i = 0; i < SameTag.length; i++) {
      if (Fake.includes(SameTag[i])) await Original.push(SameTag[i]);
      await Fake.push(SameTag[i]);
    };

    SameTag = Original.length;

    const Embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Members Information!")
    .setDescription(`Total - **${message.guild.memberCount}**\nHuman - **${Humans.size}**\nBots - **${Bots.size}**\nOnline - **${Online.size}** | Idle - **${Idle.size}** | Do Not Distrub - **${Dnd.size}** | Offline - **${Offline.size}**\nPlaying - **${Players.size}**\nDiscord In Website - **${Websites.size}** | Desktop - **${Desktop.size}** | Mobile - **${Mobile.size}**\nSame Discriminator - **${SameTag}**`)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};