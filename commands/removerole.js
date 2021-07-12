const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: 'removerole',
	description: 'Remove a role to the mentioned user',
	aliases: ['rrole'],
	usage: 'removerole <user> <name of role>',
	cooldown: 1,
	execute(message, args, bot) {
     if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command: Manage Roles")
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the right permission: Manage Roles')
            const targetUser = message.mentions.users.first() || message.guild.members.cache.get(args[1]);
            if (!targetUser) {
                message.channel.send('Please specify someone to give a role to. | Usage: removerole {member} {role name}')
                return
            }

            const roleName = args.slice(2).join(" ")
            const { guild } = message

            const role = guild.roles.cache.find((role) => {
                return role.name === roleName
            })
            if (!role) {
                message.reply(`There is no role with the name "**${roleName}**"`)
                return
            }
            if (!role.editable) return message.channel.send(":x: **That role is higher than my highest role**")

            const member = guild.members.cache.get(targetUser.id)

            if (member.roles.cache.get(role.id)) {
                member.roles.remove(role).then(() => {
                    message.channel.send(`The user no longer has the "**${roleName}**" role`)
                }).catch((err) => {
                    message.channel.send('I was unable to fulfill your request | Bug Maybe? Report it using the bug command')
                })
            }
    
    
	},
};