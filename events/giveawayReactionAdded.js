const Discord = require('discord.js')

module.exports = {
  name: "giveawayReactionAdded",
async execute(giveaway, member, reaction)  {
  manager.on('giveawayEnded', async (giveaway, winners, reaction) => {
 if (
      giveaway.extraData.role !== null &&
      !member.roles.cache.some(r => r.id ===giveaway.extraData.role)
    ) {
      reaction.users.remove(member.user);
      member.send({
        embed: {
          title: ":x: Entry Denied!",
          description: `You must have the role \`${giveaway.extraData.role}\` to participate in that giveaway.`,
        }
      });
    }
  })
  },
};