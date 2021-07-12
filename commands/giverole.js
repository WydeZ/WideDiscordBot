const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'giverole',
	description: 'Gives a role to the mentioned user',
	aliases: ['addrole'],
	usage: 'giverole <user> <name of role>',
	cooldown: 1,
		async execute(message, args, bot) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command: Manage Roles")
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the right permission: Manage Roles')
            const targetUser = message.mentions.users.first() || message.guild.members.cache.get(args[1]);
            if (!targetUser) {
                message.reply('Please specify someone to give a role to. | Usage: giverole {member} {role name}')
                return
            }

            const roleName = args.slice(2).join(" ")
            if (!roleName) return message.channel.send('Please specify a role name Usage: giverole {member} {role name}')
            const { guild } = message

            const role = guild.roles.cache.find((role) => {
                return role.name === roleName
            })
            if (!role) {
                message.reply(`There is no role with the name "**${roleName}**"`)
                return
            }

            if (role.position > message.member.roles.highest.position) {
                return message.channel.send('That role is higher than your highest role, please try again')
            }
            if (!role.editable) return message.channel.send(":x: **That role is higher than my highest role**")
            const member = guild.members.cache.get(targetUser.id)
            member.roles.add(role).then(() => {
                message.channel.send(`That user now has the "**${roleName}**" role`)
            }).catch((err) => {
                message.channel.send('I was unable to fulfill your request | Bug Maybe? Report it using the !bug command')
            })
    
	},
};