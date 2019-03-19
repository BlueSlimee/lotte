const { Client, Config } = require('chariot.js')
const games = require('../status.json').status

module.exports = class Lotte extends Client {
  constructor (token) {
    super(new Config(
      token,
      `${__dirname}/commands`,
      {
        prefix: 'lotte ',
        owner: ['485837271967465472', '268526982222970880']
      },
      {
        defaultImageFormat: 'png',
        defaultImageSize: 1024
      }
    ))

    this.on('ready', () => this.onReady())
  }
  onReady () {
    this.editStatus('dnd', games[Math.floor(Math.random() * games.length)])
  }
}
