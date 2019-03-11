const CommandContext = require('./CommandContext')

module.exports = class Command {
  constructor () {
    this.description = 'Não sei...'
    this.category = 'util'
    this.owner = false
  }
  execute (message, args, chariot) {
    this.run(new CommandContext(chariot, message, args))
  }
}
