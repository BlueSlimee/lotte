const Command = require('../structures/Command')

class Ping extends Command {
  constructor () {
    super()

    this.name = 'ping'
    this.aliases = ['pong']
    this.description = 'Mostra o tempo de resposta do bot'
    this.category = 'misc'
  }

  async run (context) {
   let m = await context.send('Calculando...')
   m.edit({ content: `Pong! ${Math.round(Date.now() - m.timestamp)}ms` })
  }
}

module.exports = new Ping()
