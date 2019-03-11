const Command = require('../structures/Command')
const puppeteer = require('puppeteer')

class Search extends Command {
  constructor () {
    super()

    this.name = 'search'
    this.aliases = ['googleit']
    this.owner = true
    this.description = 'Pesquisa algo no Google'
    this.category = 'dev'
  }

  async run (context) {
    await context.message.channel.createMessage('Pesquisando...')
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    await page.goto('https://google.com.br/search?q=' + encodeURIComponent(context.args.join(' ')))
    await page.setViewport({ width: 1366, height: 768 })
    let buffer = await page.screenshot({ encoding: 'binary', format: 'png' })

    await browser.close()
    context.send({ content: `Resultados para \`${context.args.join(' ')}\`` }, { file: buffer, name: 'results.png' })
  }
}

module.exports = new Search()
