const { searchMDN } = require('mdn-search-docs')
const { RichEmbed } = require('chariot.js')
const Command = require('../structures/Command')

class MDN extends Command {
  constructor () {
    super()

    this.name = 'mdn'
    this.description = 'Pesquisa algo na MDN'
    this.category = 'util'
  }

  async run (context) {
    let results = await searchMDN({ term: context.args.join(' '), locale: 'pt-BR' })
    if (!results.documents[0]) return context.send('Não encontrei nada sobre isso na MDN...')

    return context.send(new RichEmbed()
      .setTitle(results.documents[0].title)
      .setColor(0x00ffff)
      .setFooter('Mozilla Developer Network', 'http://www.stickpng.com/assets/images/58480eb3cef1014c0b5e492a.png')
      .setUrl(results.documents[0].url)
      .setDescription(`${results.documents[0].excerpt.replace(/<\/?[^>]+(>|$)/g, '')}\n\nRelacionados: \`${results.documents.slice(1).map(b => b.title).join(', ')}\``))
  }
}

module.exports = new MDN()
