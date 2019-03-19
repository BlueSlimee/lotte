const Command = require('../structures/Command')
const { RichEmbed } = require('chariot.js')

class Help extends Command {
  constructor () {
    super()

    this.name = 'help'
    this.aliases = ['ajuda']
    this.description = 'Ajuda do bot'
    this.category = 'misc'
  }

  run (context) {
    let cmd = context.args[0]
    const embed = new RichEmbed()
      .setColor(0x000fff).setFooter(context.message.author.username, context.message.author.avatarURL)
    if (cmd) {
      const command = context.client.commands.filter(a => a.name === cmd)[0]
      if (!command) return context.send(embed.setDescription('**Comando não encontrado!**').setColor(0xff0000))

      embed.setDescription(command.description)
      embed.addField(`Aliases: \`${(command.aliases.join(', ') || 'Sem aliases!')}\``, `Categoria: \`${command.category}\``)
      embed.setTitle(command.name)
      return context.send(embed)
    }
    embed.setTitle('Minha ajuda!')
    context.client.commands.forEach((command) => {
      embed.addField(`\`${command.name}\``, command.description)
    })
    context.send(embed)
  }
}

module.exports = new Help()
