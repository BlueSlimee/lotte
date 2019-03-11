/* eslint no-eval: 0 */
const { RichEmbed } = require('chariot.js')
const Command = require('../structures/Command')

class Eval extends Command {
  constructor () {
    super()

    this.name = 'eval'
    this.owner = true
    this.aliases = ['evalute']
    this.description = 'Executa código.'
    this.category = 'dev'
  }

  run (context) {
    const code = context.args.join(' ')
    let embed = new RichEmbed()
      .setAuthor(context.message.author.username, context.message.author.avatarURL)
      .addField('Código', `\`\`\`js\n${code}\`\`\``)
      .setTitle('Resultado')

    try {
      let evaled = eval(code)
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
      embed.setDescription(`\`\`\`js\n${evaled.slice(0, 2040)}\`\`\``)
      embed.setColor(0x42f465)
    } catch (e) {
      embed.setDescription(`\`\`\`js\n${e.stack}\`\`\``)
      embed.setColor(0xff0000)
    }

    return context.send(embed)
  }
}

module.exports = new Eval()
