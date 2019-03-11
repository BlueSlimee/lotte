module.exports = class CommandContext {
  constructor (chariot, message, args) {
    this.client = chariot
    this.message = message
    this.args = args
  }

  getMemberAtPosition (index) {
    return (this.args[index] === 'me' ? this.message.member : undefined) ||
           this.message.guild.members.get(this.message.mentions[0] ? this.message.mentions[0].id : undefined) ||
           this.message.guild.members.get(this.args[index]) ||
           (this.args[index] ? this.message.guild.members.filter(u => u.user.username.startsWith(this.args[index]))[0] : undefined) ||
           this.message.member
  }
  send (...args) {
    if (args[0] instanceof require('chariot.js').RichEmbed) {
      return this.message.channel.createEmbed(...args)
    }
    return this.message.channel.createMessage(...args)
  }
}
