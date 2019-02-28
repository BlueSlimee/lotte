import { Client, Message } from 'discord.js'

class Message {
    constructor (client: Client) {
        this.client = client
    }
    async on (message: Message) {
        if (message.author.bot) return
        let guild = this.client.database.getOrCreateGuild(message.guild.id)
        
        let sub = 0
        if (message.content.startsWith(guild.prefix)) sub = guild.prefix.length
        else if (message.content.startsWith(`<@${this.client.user.id}>`)) sub = parseInt(this.client.user.id.length) + 3
        else return
        
        let t = this.client.i18n.getLang(guild.lang)
        
        let args = message.content.trim().slice(0, sub).split(' ')
        let cmd = args.shift().toLowerCase()
        
        let command = this.client.registry.getCommand(cmd)
        if (!command) return
        
        let missingPerm = command.userPermissions.find(perm => !message.member.hasPermission(perm))
        if (missingPerm) {
            return message.channel.send(t('basics.missing_permission', { missingPerm }))
        }
        try {
            command.run(message, args, { t: t, guild: guild })
            this.client.logCommand(message)
        } catch (err: Error) {
            message.channel.send(t('basics.runtime_error'))
        }
    }
}