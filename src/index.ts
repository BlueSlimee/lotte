import { Client, Message, RichEmbed } from 'discord.js'
import { CommandRegistry } from './commands/CommandRegistry'
import { Constants } from './Constants'
import { EventRegistry } from './events/EventRegistry'

class DocBot extends Client {
    constructor (clientOptions: Object) {
        super(clientOptions)
        
        this.registry = new CommandRegistry(this)
        EventRegistry.register(this)
    }
    logCommand (message: Message) {
        this.channels.get(Constants.LOGGING_CHANNEL).send(new RichEmbed()
          .setTitle('✉️ New command')
          .setColor('RANDOM')
          .setDescription(`Content: \`${message.content.slice(0, 1800)}\`\nAuthor: \`${message.author.tag}\`\nGuild: \`${message.guild ? message.guild.name +' ('+ message.guild.id +')' : 'DM'}`)
        )
    }
}

let client = new DocBot({ disableEveryone: true })

client.login(process.env.DISCORD_TOKEN)

