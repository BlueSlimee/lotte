const Command = require('../structures/Command')

class Say extends Command {
  constructor () {
    super()

    this.name = 'say'
    this.aliases = ['falar']
    this.description = 'Faz eu falar algo!'
    this.category = 'misc'
  }

  run (context) {
    context.send({ content: context.args.join(' '), disableEveryone: true })
  }
}

module.exports = new Say()
