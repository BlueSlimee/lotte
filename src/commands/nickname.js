const Command = require('../structures/Command')

class Ping extends Command {
  constructor () {
    super()
// gebte a vrite é linda dmeias
    this.name = 'nickname'
    this.aliases = ['setnickname']
    this.description = 'Mude o nickname de alguém!'
    this.category = 'util'
  }

  async run (context) {
    let member = context.getMemberAtPosition(0)
    await member.setNickname(context.args.slice(1).join(' '))
    context.send(`Ok! Seu novo nickname é \`${context.args.slice(1).join(' ')}\`!`)
  }
}// ado ado o blue é viado, by the way setNickname is not a function.

module.exports = new Ping()
