const Command = require('../structures/Command')
const { RichEmbed } = require('chariot.js')

class SearchEmoji extends Command {
  constructor () {
    super()

    this.name = 'searchemoji'
    this.aliases = ['emojisearch']
    this.description = 'Pesquisa emojis que conheço!'
    this.category = 'fun'
  }

  run (context) {
    const guildsEmojis = context.client.guilds.filter(a => a.emojis[0]).map(a => a.emojis)
    let globalEmojis = []
    globalEmojis = globalEmojis.concat(...guildsEmojis)

    const matchingEmojis = globalEmojis.filter(a => a.name.toLowerCase().includes(context.args.join('_').toLowerCase()))
    if (!matchingEmojis[0]) return context.send('Não encontrei nenhum emoji com esse nome...')

    context.send(new RichEmbed()
      .setTitle(`${matchingEmojis.length} ${matchingEmojis.length > 1 ? 'emojis encontrados' : 'emoji encontrado'}`)
      .setDescription(
        matchingEmojis.map(a => {
          return `<${a.animated ? 'a' : ''}:${a.name}:${a.id}>`
        }).join(' ').slice(0, 2045)).setTimestamp().setColor(0x000fff))
  }
}

module.exports = new SearchEmoji()
