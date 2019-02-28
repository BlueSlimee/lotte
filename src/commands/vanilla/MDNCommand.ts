import Command from '../Command'
import { searchMDN } from 'mdn-search-docs'
import { RichEmbed } from 'discord.js'

export default class MDNCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'mdn',
            aliases: ['js', 'css']
        })
    }
    
    async run (message, args, { t, guild }) {
        let result = await searchMDN({ term: args.join(' '), lang: guild.lang })
        console.log(result)
        message.channel.send(new RichEmbed().setTitle('MDN'))
    }
}