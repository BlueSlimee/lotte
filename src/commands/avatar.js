const { RichEmbed } = require('chariot.js')
const Command = require('../structures/Command')

class Avatar extends Command {
  constructor () {
    super()

    this.name = 'avatar'
    this.aliases = ['pfp']
    this.description = 'Mostra o avatar de alguém.'
    this.category = 'util'
  }

  run (context) {
    let user = context.getMemberAtPosition(0)

    context.send(new RichEmbed()
      .setTitle('Aqui está!')
      .setImage(user.user.avatarURL))
  }
}

module.exports = new Avatar()
